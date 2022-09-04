/* tslint:disable:no-redundant-jsdoc */
import {NgForm} from '@angular/forms';
import {Component, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import {MessageService} from '../../../shared/message/message.service';
import {AcaoSistema} from '../../../shared/component/acao-sistema.acao';
import {SecurityService} from '../../../shared/security/security.service';
import {ClienteClientService} from '../shared/tipo-amigo-client/cliente-client.service';

/**
 * Componente de formulário de Usuário.
 *
 * @author Guiliano Rangel (UEG)
 */
@Component({
  selector: 'app-usuario-form',
  templateUrl: './cliente-form.component.html',
  styleUrls: ['./cliente-form.component.scss']
})
export class ClienteFormComponent {

  public acaoSistema: AcaoSistema;

  public cliente: any;
  public submitted: boolean;

  private dialogRef: MatDialogRef<any>;

  @ViewChild('formCliente', { static: true }) formCliente: NgForm;

  /**
   * Construtor da classe.
   *
   * @param route
   * @param router
   * @param dialog
   * @param messageService
   * @param securityService
   * @param clienteClientService
   */
  constructor(
    route: ActivatedRoute,
    private router: Router,
    private dialog: MatDialog,
    private messageService: MessageService,
    public securityService: SecurityService,
    private clienteClientService: ClienteClientService
  ) {
    this.acaoSistema = new AcaoSistema(route);

    if (this.acaoSistema.isAcaoIncluir()) {
      this.cliente = {};
    }

    if (this.acaoSistema.isAcaoAlterar() || this.acaoSistema.isAcaoVisualizar()) {
      this.cliente = route.snapshot.data.cliente;
    }
  }

  /**
   * Salva a instância de Usuário.
   *
   * @param cliente
   * @param form
   * @param event
   */
  public salvar(cliente: any, form: NgForm, event: any) {
    form.onSubmit(event);
    this.submitted = true;

    if (form.valid) {
      this.clienteClientService.salvar(cliente).subscribe(() => {
        this.router.navigate(['/administracao/cliente']);
        this.messageService.addMsgSuccess('MSG007');
      }, error => {
        this.messageService.addMsgDanger(error);
      });
    } else {
      this.messageService.addMsgSuccess('MSG001');
    }
  }

  /**
   * Remover o Tipo de Amigo informado.
   *
   * @param cliente
   */
  private remover(cliente: any): void {
    this.messageService.addConfirmYesNo('MSG045', () => {
      this.clienteClientService.remover(cliente).subscribe(() => {
        this.router.navigate(['/administracao/cliente']);
        this.messageService.addMsgSuccess('MSG007');
      }, error => {
        cliente.status = true;
        this.messageService.addMsgDanger(error);
      });
    }, () => {
      cliente.status = true;
    });
  }

  /**
   * Confirma o cancelamento e volta para a tela de Pesquisa.
   */
  public cancelar(): void {
    let confirmed = false;

    if (this.acaoSistema.isAcaoVisualizar()) {
      this.router.navigateByUrl('/administracao/cliente');
      confirmed = true;
    }

    if ( !confirmed ) {
      this.messageService.addConfirmYesNo('MSG010', () => {
        this.router.navigateByUrl('/administracao/cliente');
      });
    }
  }

  /**
   * Fecar o Modal de Vinculação de Usuário do AD.
   */
  public closeDialogs(): void {
    this.dialogRef.close();
  }
}
