import { Routes } from '@angular/router';

import { SecurityGuard } from '../../shared/security/security.guard';
import { ClienteResolve } from './shared/cliente-client/cliente.resolve';
import { ClienteFormComponent } from './cliente-form/cliente-form.component';
import { ClienteListComponent } from './cliente-list/cliente-list.component';

/**
 * Configurações de rota de Usuário.
 *
 * @author Guiliano Rangel (UEG)
 */
export const ClienteRoutes: Routes = [
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
          'ROLE_USUARIO_INCLUIR'
        ]
      }
    },
    resolve: {
      // sistemas: SistemaAtivoResolve
    }
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
          'ROLE_USUARIO_PESQUISAR'
        ]
      }
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
          'ROLE_USUARIO_ALTERAR'
        ]
      }
    },
    resolve: {
      usuario: ClienteResolve,
      // sistemas: SistemaAtivoResolve
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
          'ROLE_USUARIO_VISUALIZAR'
        ]
      }
    },
    resolve: {
      usuario: ClienteResolve
    }
  },
  {
    path: '',
    redirectTo: 'listar',
    pathMatch: 'full'
  }
];
