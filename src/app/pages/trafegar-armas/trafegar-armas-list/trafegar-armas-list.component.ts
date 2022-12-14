/* tslint:disable:no-redundant-jsdoc */
import {ActivatedRoute} from '@angular/router';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {Component, OnInit, ViewChild} from '@angular/core';

import {MessageService} from 'src/app/shared/message/message.service';
import {SecurityService} from 'src/app/shared/security/security.service';
import {AbstractComponent} from '../../../shared/component/Abstract.component';
import {TrafegarArmasClientService} from '../shared/trafegar-armas-client/trafegar-armas-client.service';
import {formatDate} from '@angular/common';
import {FiltroTrafegarArmasDTO} from '../../../shared/dto/trafegar-armas.dto';

/**
 * Componente de listagem de Usuário.
 *
 * @author Guiliano Rangel (UEG)
 */
@Component({
  selector: 'app-usuario-list',
  templateUrl: './trafegar-armas-list.component.html',
  styleUrls: ['./trafegar-armas-list-component.scss']
})
export class TrafegarArmasListComponent extends AbstractComponent implements OnInit {

  public filtroDTO: FiltroTrafegarArmasDTO;

  public dataSource: MatTableDataSource<any>;

  public tipoAmigos: any[];

  public dataAmizade: Date = null;

  public displayedColumns = ['serie', 'acoes'];

  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;

  /**
   * Construtor da classe.
   *
   * @param route
   * @param messageService
   * @param securityService
   * @param amigoClientService
   */
  constructor(
    route: ActivatedRoute,
    private messageService: MessageService,
    public securityService: SecurityService,
    private amigoClientService: TrafegarArmasClientService
  ) {
    super();
    const amigos = route.snapshot.data.amigos;
    this.tipoAmigos = route.snapshot.data.tipoAmigos;
    this.dataSource = new MatTableDataSource<any>(amigos);
  }

  /**
   * Inicializa o Component.
   */
  ngOnInit() {
    this.filtroDTO = FiltroTrafegarArmasDTO.getInstace();
    this.dataSource.paginator = this.paginator;
  }

  /**
   * Pesquisa o Amigo conforme o filtro de pesquisa informado.
   *
   * @param FiltroTrafegarArmasDTO
   */
  public pesquisar(filtroTrafegarArmasDTO: FiltroTrafegarArmasDTO): void {
    this.amigoClientService.getByFiltro(filtroTrafegarArmasDTO).subscribe(data => {
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
    this.filtroDTO = FiltroTrafegarArmasDTO.getInstace();
    this.dataSource.data = [];
  }

  /**
   * Altera o status do Amigo informado.
   *
   * @param amigo
   */
  public alterarStatusAmigo(amigo: any): void {
    console.log('alterastatus:', amigo);
    if (amigo.amigo) {
      this.tornarAmigo(amigo);
    } else {
      this.deixarAmigo(amigo);
    }
  }

  /**
   * Tornar Amigo o Amigo informado.
   *
   * @param amigo
   */
  private tornarAmigo(amigo: any): void {
    this.messageService.addConfirmYesNo('MSG046', () => {
      this.amigoClientService.tornarAmigo(amigo.id).subscribe(() => {
        this.pesquisar(this.filtroDTO);
        this.messageService.addMsgSuccess('MSG007');
      }, error => {
        amigo.amigo = false;
        this.messageService.addMsgDanger(error);
      });
    }, () => {
      amigo.amigo = false;
    });
  }

  /**
   * Deixar de ser Amigo do cadastro informado.
   *
   * @param amigo
   */
  private deixarAmigo(amigo: any): void {
    this.messageService.addConfirmYesNo('MSG047', () => {
      this.amigoClientService.deixarAmizade(amigo.id).subscribe(() => {
        this.pesquisar(this.filtroDTO);
        this.messageService.addMsgSuccess('MSG007');
      }, error => {
        amigo.amigo = true;
        this.messageService.addMsgDanger(error);
      });
    }, () => {
      amigo.amigo = true;
    });
  }

  /**
   * remover o Amigo informado.
   *
   * @param amigo
   */
  private remover(amigo: any): void {
    this.messageService.addConfirmYesNo('MSG045', () => {
      this.amigoClientService.remover(amigo).subscribe(() => {
        this.filtroDTO.serie = this.filtroDTO.serie ? this.filtroDTO.serie : '%';
        this.pesquisar(this.filtroDTO);
        this.messageService.addMsgSuccess('MSG007');
      }, error => {
        amigo.status = false;
        this.messageService.addMsgDanger(error);
      });
    }, () => {
      amigo.status = false;
    });
  }
}
