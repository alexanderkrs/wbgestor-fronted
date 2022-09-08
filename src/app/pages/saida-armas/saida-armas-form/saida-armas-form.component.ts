/* tslint:disable:no-redundant-jsdoc */
import {NgForm} from '@angular/forms';
import {Component, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {MatTableDataSource} from '@angular/material/table';
import {MatDialog} from '@angular/material/dialog';
import {MessageService} from '../../../shared/message/message.service';
import {AcaoSistema} from '../../../shared/component/acao-sistema.acao';
import {SecurityService} from '../../../shared/security/security.service';
import {SaidaArmasClientService} from '../shared/saida-armas-client/saida-armas-client.service';

/**
 * Componente de formulário de Amigo.
 *
 * @author Guiliano Rangel (UEG)
 */
@Component({
  selector: 'app-amigo-form',
  templateUrl: './saida-armas-form.component.html',
  styleUrls: ['./saida-armas-form.component.scss']
})
export class SaidaArmasFormComponent {

  public acaoSistema: AcaoSistema;

  public trafegarArma: any;
  public clientes: any[];

  public submitted: boolean;

  public dataSourceGrupos: MatTableDataSource<any>;

  public displayedColumns: any;

  @ViewChild('formTrafegarArmas', { static: true }) formTrafegarArmas: NgForm;

  /**
   * Construtor da classe.
   *
   * @param route
   * @param router
   * @param dialog
   * @param messageService
   * @param securityService
   * @param trafegarArmasClientService
   */
  constructor(
    route: ActivatedRoute,
    private router: Router,
    private dialog: MatDialog,
    private messageService: MessageService,
    public securityService: SecurityService,
    private trafegarArmasClientService: SaidaArmasClientService
  ) {
    this.acaoSistema = new AcaoSistema(route);
    this.dataSourceGrupos = new MatTableDataSource<any>();

    this.clientes = route.snapshot.data.clientes;


    if (this.acaoSistema.isAcaoIncluir()) {

      // Inicializa o Amigo para Inclusão
      this.trafegarArma = {
      };
    }


    if (this.acaoSistema.isAcaoAlterar() || this.acaoSistema.isAcaoVisualizar()) {
      this.trafegarArma = route.snapshot.data.amigo;
    }
  }


  /**
   * Salva a instância de Amigo.
   *
   * @param trafegarArmas
   * @param form
   * @param event
   */
  public salvar(trafegarArmas: any, form: NgForm, event: any) {
    form.onSubmit(event);

    if (form.valid) {
      this.trafegarArmasClientService.salvar(trafegarArmas).subscribe(() => {
          this.router.navigate(['/administracao/saida-armas']);
          this.messageService.addMsgSuccess('MSG007');
        }, error => {
          this.messageService.addMsgDanger(error);
        });
    }
  }

  /**
   * Altera o status do Amigo informado.
   *
   * @param amigo
   */
  public alterarStatusAmigo(amigo: any): void {
    if (amigo.amigo) {
      this.tornarAmigo(amigo);
    } else {
      this.deixarAmigo(amigo);
    }
  }

  /**
   * Torna o cadastro um Amigo.
   *
   * @param amigo
   */
  private tornarAmigo(amigo: any): void {
    this.messageService.addConfirmYesNo('MSG046', () => {
      this.trafegarArmasClientService.tornarAmigo(amigo.id).subscribe(() => {
        this.messageService.addMsgSuccess('MSG007');
      }, error => {
        amigo.status = false;
        this.messageService.addMsgDanger(error);
      });
    }, () => {
      amigo.status = false;
    });
  }

  /**
   * deixar de ser amigo do cadastro
   *
   * @param amigo
   */
  private deixarAmigo(amigo: any): void {
    this.messageService.addConfirmYesNo('MSG047', () => {
      this.trafegarArmasClientService.deixarAmizade(amigo.id).subscribe(() => {
        this.messageService.addMsgSuccess('MSG007');
      }, error => {
        amigo.status = true;
        this.messageService.addMsgDanger(error);
      });
    }, () => {
      amigo.status = true;
    });
  }

  /**
   * Confirma o cancelamento e volta para a tela de Pesquisa.
   */
  public cancelar(): void {
    let confirmed = false;

    if (this.acaoSistema.isAcaoVisualizar()) {
      this.router.navigateByUrl('/administracao/saida-armas');
      confirmed = true;
    }

    if ( !confirmed ) {
      this.messageService.addConfirmYesNo('MSG010', () => {
        this.router.navigateByUrl('/administracao/saida-armas');
      });
    }
  }

}
