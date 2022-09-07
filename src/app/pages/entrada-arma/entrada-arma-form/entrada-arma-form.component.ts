/* tslint:disable:no-redundant-jsdoc */
import {NgForm} from '@angular/forms';
import {Component, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import {MessageService} from '../../../shared/message/message.service';
import {AcaoSistema} from '../../../shared/component/acao-sistema.acao';
import {SecurityService} from '../../../shared/security/security.service';
import {EntradaArmaClientService} from '../shared/entrada-arma-client/entrada-arma-client.service';

/**
 * Componente de formulário de Usuário.
 *
 * @author Guiliano Rangel (UEG)
 */
@Component({
  selector: 'app-usuario-form',
  templateUrl: './entrada-arma-form.component.html',
  styleUrls: ['./entrada-arma-form.component.scss']
})
export class EntradaArmaFormComponent {

  public acaoSistema: AcaoSistema;

  public entradaArma: any;

  public submitted: boolean;

  private dialogRef: MatDialogRef<any>;


  @ViewChild('formEntradaArma', { static: true }) formEntradaArma: NgForm;

  /**
   * Construtor da classe.
   *
   * @param route
   * @param router
   * @param dialog
   * @param messageService
   * @param securityService
   * @param entradaArmaClientService
   */
  constructor(
    route: ActivatedRoute,
    private router: Router,
    private dialog: MatDialog,
    private messageService: MessageService,
    public securityService: SecurityService,
    private entradaArmaClientService: EntradaArmaClientService
  ) {
    this.acaoSistema = new AcaoSistema(route);

    if (this.acaoSistema.isAcaoIncluir()) {
      this.entradaArma = {};
    }

    if (this.acaoSistema.isAcaoAlterar() || this.acaoSistema.isAcaoVisualizar()) {
      this.entradaArma = route.snapshot.data.tipoAmigo;
    }
  }

  /**
   * Salva a instância de Usuário.
   *

   * @param entradaArma
   * @param form
   * @param event
   */
  public salvar(entradaArma: any, form: NgForm, event: any) {
    form.onSubmit(event);
    this.submitted = true;

    if (form.valid) {
      this.entradaArmaClientService.salvar(entradaArma).subscribe(() => {
        this.router.navigate(['/administracao/entrada-arma']);
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
   * @param entradaArma
   */
  private remover(entradaArma: any): void {
    this.messageService.addConfirmYesNo('MSG045', () => {
      this.entradaArmaClientService.remover(entradaArma).subscribe(() => {
        this.router.navigate(['/administracao/entrada-arma']);
        this.messageService.addMsgSuccess('MSG007');
      }, error => {
        entradaArma.status = true;
        this.messageService.addMsgDanger(error);
      });
    }, () => {
      entradaArma.status = true;
    });
  }

  /**
   * Confirma o cancelamento e volta para a tela de Pesquisa.
   */
  public cancelar(): void {
    let confirmed = false;

    if (this.acaoSistema.isAcaoVisualizar()) {
      this.router.navigateByUrl('/administracao/entrada-arma');
      confirmed = true;
    }

    if ( !confirmed ) {
      this.messageService.addConfirmYesNo('MSG010', () => {
        this.router.navigateByUrl('/administracao/entrada-arma');
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
