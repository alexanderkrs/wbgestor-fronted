import {Routes} from '@angular/router';

import {SecurityGuard} from '../../shared/security/security.guard';
import {TrafegarArmasResolve} from './shared/trafegar-armas-client/trafegar-armas.resolve';
import {TrafegarArmasFormComponent} from './trafegar-armas-form/trafegar-armas-form.component';
import {TrafegarArmasListComponent} from './trafegar-armas-list/trafegar-armas-list.component';
import {TrafegarArmasListResolve} from './shared/trafegar-armas-client/trafegar-armas-list.resolve';
import {TipoAmigoListResolve} from '../tipo-amigo/shared/tipo-amigo-client/tipo-amigo-list.resolve';

/**
 * Configurações de rota de Usuário.
 *
 * @author Guiliano Rangel (UEG)
 */
export const AmigoRoutes: Routes = [
  {
    path: 'incluir',
    component: TrafegarArmasFormComponent,
    canActivate: [
      SecurityGuard
    ],
    data: {
      acao: 'incluir',
      security: {
        roles: [
          'ROLE_TRAFEGARARMAS_OPERACAO'
        ]
      }
    },
    resolve: {
      tipoAmigos: TipoAmigoListResolve
    }
  },
  {
    path: 'listar',
    component: TrafegarArmasListComponent,
    canActivate: [
      SecurityGuard
    ],
    data: {
      security: {
        roles: [
          'ROLE_TRAFEGARARMAS_OPERACAO'
        ]
      }
    },
    resolve: {
      tipoAmigos: TipoAmigoListResolve,
      amigos: TrafegarArmasListResolve
    }
  },
  {
    path: ':id/alterar',
    component: TrafegarArmasFormComponent,
    canActivate: [
      SecurityGuard
    ],
    data: {
      acao: 'alterar',
      security: {
        roles: [
          'ROLE_TRAFEGARARMAS_OPERACAO'
        ]
      }
    },
    resolve: {
      amigo: TrafegarArmasResolve,
      tipoAmigos: TipoAmigoListResolve
    }
  },
  {
    path: ':id/visualizar',
    component: TrafegarArmasFormComponent,
    canActivate: [
      SecurityGuard
    ],
    data: {
      acao: 'visualizar',
      security: {
        roles: [
          'ROLE_TRAFEGARARMAS_OPERACAO'
        ]
      }
    },
    resolve: {
      amigo: TrafegarArmasResolve,
      tipoAmigos: TipoAmigoListResolve
    }
  },
  {
    path: '',
    redirectTo: 'listar',
    pathMatch: 'full'
  }
];
