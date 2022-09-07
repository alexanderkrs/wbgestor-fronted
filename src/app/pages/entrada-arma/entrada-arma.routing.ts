import { Routes } from '@angular/router';

import { SecurityGuard } from '../../shared/security/security.guard';
import { EntradaArmaResolve } from './shared/entrada-arma-client/entrada-arma.resolve';
import { EntradaArmaFormComponent } from './entrada-arma-form/entrada-arma-form.component';

/**
 * Configurações de rota de Usuário.
 *
 * @author Guiliano Rangel (UEG)
 */
export const TipoAmigoRoutes: Routes = [
  {
    path: 'incluir',
    component: EntradaArmaFormComponent,
    canActivate: [
      SecurityGuard
    ],
    data: {
      acao: 'incluir',
      security: {
        roles: [
          'ROLE_TIPOAMIGO_INCLUIR'
        ]
      }
    },
  },
  {

    path: ':id/alterar',
    component: EntradaArmaFormComponent,
    canActivate: [
      SecurityGuard
    ],
    data: {
      acao: 'alterar',
      security: {
        roles: [
          'ROLE_TIPOAMIGO_ALTERAR'
        ]
      }
    },
    resolve: {
      tipoAmigo: EntradaArmaResolve,
    }
  },
  {
    path: ':id/visualizar',
    component: EntradaArmaFormComponent,
    canActivate: [
      SecurityGuard
    ],
    data: {
      acao: 'visualizar',
      security: {
        roles: [
          'ROLE_TIPOAMIGO_VISUALIZAR'
        ]
      }
    },
    resolve: {
      tipoAmigo: EntradaArmaResolve
    }
  },
  {
    path: '',
    redirectTo: 'incluir',
    pathMatch: 'full'
  }
];
