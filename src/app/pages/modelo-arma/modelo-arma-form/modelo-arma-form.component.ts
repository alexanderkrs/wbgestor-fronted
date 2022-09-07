/* tslint:disable:no-redundant-jsdoc */
import {NgForm} from '@angular/forms';
import {Component, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import {MessageService} from '../../../shared/message/message.service';
import {AcaoSistema} from '../../../shared/component/acao-sistema.acao';
import {SecurityService} from '../../../shared/security/security.service';
<<<<<<<< HEAD:src/app/pages/entrada-arma/entrada-arma-form/entrada-arma-form.component.ts
import {EntradaArmaClientService} from '../shared/entrada-arma-client/entrada-arma-client.service';
========
import {ModeloArmaClientService} from '../shared/modelo-arma-client/modelo-arma-client.service';
>>>>>>>> osmar-frontend:src/app/pages/modelo-arma/modelo-arma-form/modelo-arma-form.component.ts

/**
 * Componente de formulário de Usuário.
 *
 * @author Guiliano Rangel (UEG)
 */
@Component({
  selector: 'app-usuario-form',
<<<<<<<< HEAD:src/app/pages/entrada-arma/entrada-arma-form/entrada-arma-form.component.ts
  templateUrl: './entrada-arma-form.component.html',
  styleUrls: ['./entrada-arma-form.component.scss']
})
export class EntradaArmaFormComponent {

  public acaoSistema: AcaoSistema;

  public entradaArma: any;
========
  templateUrl: './modelo-arma-form.component.html',
  styleUrls: ['./modelo-arma-form.component.scss']
})
export class ModeloArmaFormComponent {

  public acaoSistema: AcaoSistema;

  public modeloArma: any;
>>>>>>>> osmar-frontend:src/app/pages/modelo-arma/modelo-arma-form/modelo-arma-form.component.ts
  public submitted: boolean;

  private dialogRef: MatDialogRef<any>;

<<<<<<<< HEAD:src/app/pages/entrada-arma/entrada-arma-form/entrada-arma-form.component.ts
  @ViewChild('formEntradaArma', { static: true }) formEntradaArma: NgForm;
========
  @ViewChild('formModeloArma', { static: true }) formModeloArma: NgForm;
>>>>>>>> osmar-frontend:src/app/pages/modelo-arma/modelo-arma-form/modelo-arma-form.component.ts

  /**
   * Construtor da classe.
   *
   * @param route
   * @param router
   * @param dialog
   * @param messageService
   * @param securityService
<<<<<<<< HEAD:src/app/pages/entrada-arma/entrada-arma-form/entrada-arma-form.component.ts
   * @param entradaArmaClientService
========
   * @param modeloArmaClientService
>>>>>>>> osmar-frontend:src/app/pages/modelo-arma/modelo-arma-form/modelo-arma-form.component.ts
   */
  constructor(
    route: ActivatedRoute,
    private router: Router,
    private dialog: MatDialog,
    private messageService: MessageService,
    public securityService: SecurityService,
<<<<<<<< HEAD:src/app/pages/entrada-arma/entrada-arma-form/entrada-arma-form.component.ts
    private entradaArmaClientService: EntradaArmaClientService
========
    private modeloArmaClientService: ModeloArmaClientService
>>>>>>>> osmar-frontend:src/app/pages/modelo-arma/modelo-arma-form/modelo-arma-form.component.ts
  ) {
    this.acaoSistema = new AcaoSistema(route);

    if (this.acaoSistema.isAcaoIncluir()) {
<<<<<<<< HEAD:src/app/pages/entrada-arma/entrada-arma-form/entrada-arma-form.component.ts
      this.entradaArma = {};
    }

    if (this.acaoSistema.isAcaoAlterar() || this.acaoSistema.isAcaoVisualizar()) {
      this.entradaArma = route.snapshot.data.tipoAmigo;
========
      this.modeloArma = {};
    }

    if (this.acaoSistema.isAcaoAlterar() || this.acaoSistema.isAcaoVisualizar()) {
      this.modeloArma = route.snapshot.data.tipoAmigo;
>>>>>>>> osmar-frontend:src/app/pages/modelo-arma/modelo-arma-form/modelo-arma-form.component.ts
    }
  }

  /**
   * Salva a instância de Usuário.
   *
<<<<<<<< HEAD:src/app/pages/entrada-arma/entrada-arma-form/entrada-arma-form.component.ts
   * @param entradaArma
   * @param form
   * @param event
   */
  public salvar(entradaArma: any, form: NgForm, event: any) {
========
   * @param modeloArma
   * @param form
   * @param event
   */
  public salvar(modeloArma: any, form: NgForm, event: any) {
>>>>>>>> osmar-frontend:src/app/pages/modelo-arma/modelo-arma-form/modelo-arma-form.component.ts
    form.onSubmit(event);
    this.submitted = true;

    if (form.valid) {
<<<<<<<< HEAD:src/app/pages/entrada-arma/entrada-arma-form/entrada-arma-form.component.ts
      this.entradaArmaClientService.salvar(entradaArma).subscribe(() => {
        this.router.navigate(['/administracao/entrada-arma']);
========
      this.modeloArmaClientService.salvar(modeloArma).subscribe(() => {
        this.router.navigate(['/administracao/modelo-arma']);
>>>>>>>> osmar-frontend:src/app/pages/modelo-arma/modelo-arma-form/modelo-arma-form.component.ts
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
<<<<<<<< HEAD:src/app/pages/entrada-arma/entrada-arma-form/entrada-arma-form.component.ts
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
========
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
>>>>>>>> osmar-frontend:src/app/pages/modelo-arma/modelo-arma-form/modelo-arma-form.component.ts
    });
  }

  /**
   * Confirma o cancelamento e volta para a tela de Pesquisa.
   */
  public cancelar(): void {
    let confirmed = false;

    if (this.acaoSistema.isAcaoVisualizar()) {
<<<<<<<< HEAD:src/app/pages/entrada-arma/entrada-arma-form/entrada-arma-form.component.ts
      this.router.navigateByUrl('/administracao/entrada-arma');
========
      this.router.navigateByUrl('/administracao/modelo-arma');
>>>>>>>> osmar-frontend:src/app/pages/modelo-arma/modelo-arma-form/modelo-arma-form.component.ts
      confirmed = true;
    }

    if ( !confirmed ) {
      this.messageService.addConfirmYesNo('MSG010', () => {
<<<<<<<< HEAD:src/app/pages/entrada-arma/entrada-arma-form/entrada-arma-form.component.ts
        this.router.navigateByUrl('/administracao/entrada-arma');
========
        this.router.navigateByUrl('/administracao/modelo-arma');
>>>>>>>> osmar-frontend:src/app/pages/modelo-arma/modelo-arma-form/modelo-arma-form.component.ts
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
