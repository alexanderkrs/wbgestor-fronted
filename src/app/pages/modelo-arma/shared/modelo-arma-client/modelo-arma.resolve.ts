/* tslint:disable:no-redundant-jsdoc */
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, Router } from '@angular/router';

import { MessageService } from 'src/app/shared/message/message.service';
<<<<<<<< HEAD:src/app/pages/entrada-arma/shared/entrada-arma-client/entrada-arma.resolve.ts
import { EntradaArmaClientService } from './entrada-arma-client.service';
========
import { ModeloArmaClientService } from './modelo-arma-client.service';
>>>>>>>> osmar-frontend:src/app/pages/modelo-arma/shared/modelo-arma-client/modelo-arma.resolve.ts

/**
 * Classe resolve responsável pela busca das informações de Usuário conforme o id.
 *
 * @author Guiliano Rangel (UEG)
 */
@Injectable()
<<<<<<<< HEAD:src/app/pages/entrada-arma/shared/entrada-arma-client/entrada-arma.resolve.ts
export class EntradaArmaResolve implements Resolve<any> {
========
export class ModeloArmaResolve implements Resolve<any> {
>>>>>>>> osmar-frontend:src/app/pages/modelo-arma/shared/modelo-arma-client/modelo-arma.resolve.ts

  /**
   * Construtor da classe.
   *
   * @param router
   * @param usuarioClientService
   * @param messageService
   */
  constructor(
    private router: Router,
<<<<<<<< HEAD:src/app/pages/entrada-arma/shared/entrada-arma-client/entrada-arma.resolve.ts
    private usuarioClientService: EntradaArmaClientService,
========
    private usuarioClientService: ModeloArmaClientService,
>>>>>>>> osmar-frontend:src/app/pages/modelo-arma/shared/modelo-arma-client/modelo-arma.resolve.ts
    private messageService: MessageService
  ) { }

  /**
   * Realiza a consulta por id de Usuário.
   *
   * @param route
   */
  resolve(route: ActivatedRouteSnapshot): Observable<any> {
    const id = route.params.id;

    return new Observable(observer => {
      this.usuarioClientService.getById(id).subscribe(
        data => {
          observer.next(data);
          observer.complete();
        },
        error => {
          observer.error(error);
          this.router.navigate(['']);
          this.messageService.addMsgDanger(error);
        }
      );
    });
  }
}
