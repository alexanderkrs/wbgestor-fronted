import { Routes } from '@angular/router';

import { SecurityGuard } from '../../shared/security/security.guard';
import { ClienteResolve } from './shared/cliente-client/cliente.resolve';
import { ClienteFormComponent } from './cliente-form/cliente-form.component';
import { ClienteListComponent } from './cliente-list/cliente-list.component';
import {ClienteListResolve} from './shared/cliente-client/cliente-list.resolve';

/**
 * Configurações de rota de Usuário.
 *
 * @author Guiliano Rangel (UEG)
 */
export const TipoAmigoRoutes: Routes = [
  {
    path: 'incluir',
    component: ClienteFormComponent,
    canActivate: [
      SecurityGuard
    ],
    data: {
      acao: 'incluir',
      security: {
        roles: [
          'ROLE_CLIENTE_INCLUIR',
          'ROLE_CLIENTE_STATUS'
        ]
      }
    },
  },
  {
    path: 'listar',
    component: ClienteListComponent,
    canActivate: [
      SecurityGuard
    ],
    data: {
      security: {
        roles: [
          'ROLE_CLIENTE_PESQUISAR'
        ]
      }
    },
    resolve: {
      tipoamigos: ClienteListResolve,
    }
  },
  {
    path: ':id/alterar',
    component: ClienteFormComponent,
    canActivate: [
      SecurityGuard
    ],
    data: {
      acao: 'alterar',
      security: {
        roles: [
          'ROLE_CLIENTE_ALTERAR',
          'ROLE_CLIENTE_STATUS'
        ]
      }
    },
    resolve: {
      tipoAmigo: ClienteResolve,
    }
  },
  {
    path: ':id/visualizar',
    component: ClienteFormComponent,
    canActivate: [
      SecurityGuard
    ],
    data: {
      acao: 'visualizar',
      security: {
        roles: [
          'ROLE_CLIENTE_VISUALIZAR'
        ]
      }
    },
    resolve: {
      tipoAmigo: ClienteResolve
    }
  },
  {
    path: '',
    redirectTo: 'listar',
    pathMatch: 'full'
  }
];
