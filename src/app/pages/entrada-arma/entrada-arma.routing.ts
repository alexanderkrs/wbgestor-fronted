import { Routes } from '@angular/router';

import { SecurityGuard } from '../../shared/security/security.guard';
import { EntradaArmaResolve } from './shared/entrada-arma-client/entrada-arma.resolve';
import { EntradaArmaFormComponent } from './entrada-arma-form/entrada-arma-form.component';
import { EntradaArmaListComponent } from './entrada-arma-list/entrada-arma-list.component';
import {EntradaArmaListResolve} from './shared/entrada-arma-client/entrada-arma-list.resolve';

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
    path: 'listar',
    component: EntradaArmaListComponent,
    canActivate: [
      SecurityGuard
    ],
    data: {
      security: {
        roles: [
          'ROLE_TIPOAMIGO_PESQUISAR'
        ]
      }
    },
    resolve: {
      tipoamigos: EntradaArmaListResolve,
    }
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
