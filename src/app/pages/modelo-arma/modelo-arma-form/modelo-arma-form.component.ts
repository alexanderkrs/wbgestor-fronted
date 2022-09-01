/* tslint:disable:no-redundant-jsdoc */
import {NgForm} from '@angular/forms';
import {Component, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import {MessageService} from '../../../shared/message/message.service';
import {AcaoSistema} from '../../../shared/component/acao-sistema.acao';
import {SecurityService} from '../../../shared/security/security.service';
import {ModeloArmaClientService} from '../shared/modelo-arma-client/modelo-arma-client.service';

/**
 * Componente de formulário de Usuário.
 *
 * @author Guiliano Rangel (UEG)
 */
@Component({
  selector: 'app-usuario-form',
  templateUrl: './modelo-arma-form.component.html',
  styleUrls: ['./modelo-arma-form.component.scss']
})
export class ModeloArmaFormComponent {

  public acaoSistema: AcaoSistema;

  public modeloArma: any;
  public submitted: boolean;

  private dialogRef: MatDialogRef<any>;

  @ViewChild('formModeloArma', { static: true }) formModeloArma: NgForm;

  /**
   * Construtor da classe.
   *
   * @param route
   * @param router
   * @param dialog
   * @param messageService
   * @param securityService
   * @param modeloArmaClientService
   */
  constructor(
    route: ActivatedRoute,
    private router: Router,
    private dialog: MatDialog,
    private messageService: MessageService,
    public securityService: SecurityService,
    private modeloArmaClientService: ModeloArmaClientService
  ) {
    this.acaoSistema = new AcaoSistema(route);

    if (this.acaoSistema.isAcaoIncluir()) {
      this.modeloArma = {};
    }

    if (this.acaoSistema.isAcaoAlterar() || this.acaoSistema.isAcaoVisualizar()) {
      this.modeloArma = route.snapshot.data.tipoAmigo;
    }
  }

  /**
   * Salva a instância de Usuário.
   *
   * @param modeloArma
   * @param form
   * @param event
   */
  public salvar(modeloArma: any, form: NgForm, event: any) {
    form.onSubmit(event);
    this.submitted = true;

    if (form.valid) {
      this.modeloArmaClientService.salvar(modeloArma).subscribe(() => {
        this.router.navigate(['/administracao/modelo-arma']);
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
   * @param modeloArma
   */
  private remover(modeloArma: any): void {
    this.messageService.addConfirmYesNo('MSG045', () => {
      this.modeloArmaClientService.remover(modeloArma).subscribe(() => {
        this.router.navigate(['/administracao/modelo-arma']);
        this.messageService.addMsgSuccess('MSG007');
      }, error => {
        modeloArma.status = true;
        this.messageService.addMsgDanger(error);
      });
    }, () => {
      modeloArma.status = true;
    });
  }

  /**
   * Confirma o cancelamento e volta para a tela de Pesquisa.
   */
  public cancelar(): void {
    let confirmed = false;

    if (this.acaoSistema.isAcaoVisualizar()) {
      this.router.navigateByUrl('/administracao/modelo-arma');
      confirmed = true;
    }

    if ( !confirmed ) {
      this.messageService.addConfirmYesNo('MSG010', () => {
        this.router.navigateByUrl('/administracao/modelo-arma');
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
