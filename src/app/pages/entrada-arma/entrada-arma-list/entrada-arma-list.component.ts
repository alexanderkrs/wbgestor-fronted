/* tslint:disable:no-redundant-jsdoc */
import {ActivatedRoute} from '@angular/router';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {Component, OnInit, ViewChild} from '@angular/core';

import {MessageService} from 'src/app/shared/message/message.service';
import {SecurityService} from 'src/app/shared/security/security.service';
import {AbstractComponent} from '../../../shared/component/Abstract.component';
import {EntradaArmaClientService} from '../shared/entrada-arma-client/entrada-arma-client.service';
import {FiltroModeloArmaDTO} from '../../../shared/dto/filtro-modelo-arma.dto';
import {EntradaArmaListResolve} from "../shared/entrada-arma-client/entrada-arma-list.resolve";

/**
 * Componente de listagem de Usuário.
 *
 * @author Guiliano Rangel (UEG)
 */
@Component({
  selector: 'app-entradaarma-list',
  templateUrl: './entrada-arma-list.component.html',
  styleUrls: ['./entrada-arma-list-component.scss']
})
export class EntradaArmaListComponent extends AbstractComponent implements OnInit {

  public filtroDTO: FiltroModeloArmaDTO;

  public dataSource: MatTableDataSource<any>;

  public displayedColumns = [ 'modelo', 'acoes'];

  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;

  /**
   * Construtor da classe.
   *
   * @param route
   * @param messageService
   * @param securityService
   * @param modeloAmraClientService
   */
  constructor(
    route: ActivatedRoute,
    private messageService: MessageService,
    public securityService: SecurityService,
    private entradaArmaClientService: EntradaArmaClientService
  ) {
    super();
    const entradaArmas = route.snapshot.data.entradaArmas;
    this.dataSource = new MatTableDataSource<any>(entradaArmas);
  }

  /**
   * Inicializa o Component.
   */
  ngOnInit() {
    this.filtroDTO = FiltroModeloArmaDTO.getInstace();
    this.dataSource.paginator = this.paginator;
  }

  /**
   * Pesquisa o Tipo Amigo conforme o filtro de pesquisa informado.
   *
   * @param filtroModeloArmaDTO
   */
  public pesquisar(filtroModeloArmaDTO: FiltroModeloArmaDTO): void {
    this.entradaArmaClientService.getByFiltro(filtroModeloArmaDTO).subscribe(data => {
      this.dataSource.paginator = this.paginator;
      this.dataSource.data = data;
    }, data => {
      this.messageService.addMsgDanger(data);
      this.dataSource.data = [];
    });
  }

  /**
   * Limpa o filtro de pesquisa informado.
   */
  public limpar(): void {
    this.filtroDTO = FiltroModeloArmaDTO.getInstace();
    this.dataSource.data = [];
  }

  /**
   * Ativa o Usuário informado.
   *
   * @param usuario
   */
  private remover(usuario: any): void {
    this.messageService.addConfirmYesNo('MSG045', () => {
      this.entradaArmaClientService.remover(usuario).subscribe(() => {
        this.filtroDTO.modelo = this.filtroDTO.modelo ? this.filtroDTO.modelo : '%';
        this.pesquisar(this.filtroDTO);
        this.messageService.addMsgSuccess('MSG007');
      }, error => {
        usuario.status = false;
        this.messageService.addMsgDanger(error);
      });
    }, () => {
      usuario.status = false;
    });
  }

}
