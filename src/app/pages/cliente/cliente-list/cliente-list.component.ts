/* tslint:disable:no-redundant-jsdoc */
import {ActivatedRoute} from '@angular/router';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {Component, OnInit, ViewChild} from '@angular/core';

import {MessageService} from 'src/app/shared/message/message.service';
import {SecurityService} from 'src/app/shared/security/security.service';
import {AbstractComponent} from '../../../shared/component/Abstract.component';
import {ClienteClientService} from '../shared/cliente-client/cliente-client.service';
import {FiltroClienteDTO} from '../../../shared/dto/filtro-cliente.dto';

/**
 * Componente de listagem de Usuário.
 *
 * @author Guiliano Rangel (UEG)
 */
@Component({
  selector: 'app-cliente-list',
  templateUrl: './cliente-list.component.html',
  styleUrls: ['./cliente-list-component.scss']
})
export class ClienteListComponent extends AbstractComponent implements OnInit {

  public filtroDTO: FiltroClienteDTO;

  public dataSource: MatTableDataSource<any>;

  public displayedColumns = [ 'nome', 'acoes'];

  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;

  /**
   * Construtor da classe.
   *
   * @param route
   * @param messageService
   * @param securityService
   * @param clienteClientService
   */
  constructor(
    route: ActivatedRoute,
    private messageService: MessageService,
    public securityService: SecurityService,
    private clienteClientService: ClienteClientService
  ) {
    super();
    const clientes = route.snapshot.data.clientes;
    this.dataSource = new MatTableDataSource<any>(clientes);
  }

  /**
   * Inicializa o Component.
   */
  ngOnInit() {
    this.filtroDTO = FiltroClienteDTO.getInstace();
    this.dataSource.paginator = this.paginator;
  }

  /**
   * Pesquisa o cliente conforme o filtro de pesquisa informado.
   *
   * @param filtroClienteDTO
   */
  public pesquisar(filtroClienteDTO: FiltroClienteDTO): void {
    this.clienteClientService.getByFiltro(filtroClienteDTO).subscribe(data => {
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
    this.filtroDTO = FiltroClienteDTO.getInstace();
    this.dataSource.data = [];
  }

}
