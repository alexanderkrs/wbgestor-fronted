import { Routes } from '@angular/router';

import { SecurityGuard } from '../../shared/security/security.guard';
import { ModeloArmaResolve } from './shared/modelo-arma-client/modelo-arma.resolve';
import { ModeloArmaFormComponent } from './modelo-arma-form/modelo-arma-form.component';
import { ModeloArmaListComponent } from './modelo-arma-list/modelo-arma-list.component';
import {ModeloArmaListResolve} from './shared/modelo-arma-client/modelo-arma-list.resolve';

/**
 * Configurações de rota de Usuário.
 *
 * @author Guiliano Rangel (UEG)
 */
export const TipoAmigoRoutes: Routes = [
  {
    path: 'incluir',
    component: ModeloArmaFormComponent,
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
    component: ModeloArmaListComponent,
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
      tipoamigos: ModeloArmaListResolve,
    }
  },

  {
    path: ':id/alterar',
    component: ModeloArmaFormComponent,
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
      tipoAmigo: ModeloArmaResolve,
    }
  },
  {
    path: ':id/visualizar',
    component: ModeloArmaFormComponent,
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
      tipoAmigo: ModeloArmaResolve
    }
  },
  {
    path: '',
    redirectTo: 'listar',
    pathMatch: 'full'
  }
];
