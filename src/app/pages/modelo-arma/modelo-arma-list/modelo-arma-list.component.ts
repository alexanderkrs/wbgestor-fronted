/* tslint:disable:no-redundant-jsdoc */
import {ActivatedRoute} from '@angular/router';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {Component, OnInit, ViewChild} from '@angular/core';

import {MessageService} from 'src/app/shared/message/message.service';
import {SecurityService} from 'src/app/shared/security/security.service';
import {AbstractComponent} from '../../../shared/component/Abstract.component';
import {ModeloArmaClientService} from '../shared/modelo-arma-client/modelo-arma-client.service';
import {FiltroModeloArmaDTO} from '../../../shared/dto/filtro-modelo-arma.dto';
import {ModeloArmaListResolve} from "../shared/modelo-arma-client/modelo-arma-list.resolve";

/**
 * Componente de listagem de Usuário.
 *
 * @author Guiliano Rangel (UEG)
 */
@Component({
  selector: 'app-modeloarma-list',
  templateUrl: './modelo-arma-list.component.html',
  styleUrls: ['./modelo-arma-list-component.scss']
})
export class ModeloArmaListComponent extends AbstractComponent implements OnInit {

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
    private modeloArmaClientService: ModeloArmaClientService
  ) {
    super();
    const modeloArmas = route.snapshot.data.modeloArmas;
    this.dataSource = new MatTableDataSource<any>(modeloArmas);
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
    this.modeloArmaClientService.getByFiltro(filtroModeloArmaDTO).subscribe(data => {
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
      this.modeloArmaClientService.remover(usuario).subscribe(() => {
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
