import {Routes} from '@angular/router';

import {SecurityGuard} from '../../shared/security/security.guard';
import {SaidaArmasResolve} from './shared/saida-armas-client/saida-armas.resolve';
import {SaidaArmasFormComponent} from './saida-armas-form/saida-armas-form.component';
import {SaidaArmasListComponent} from './saida-armas-list/saida-armas-list.component';
import {SaidaArmasListResolve} from './shared/saida-armas-client/saida-armas-list.resolve';
import {TipoAmigoListResolve} from '../tipo-amigo/shared/tipo-amigo-client/tipo-amigo-list.resolve';

/**
 * Configurações de rota de Usuário.
 *
 * @author Guiliano Rangel (UEG)
 */
export const AmigoRoutes: Routes = [
  {
    path: 'incluir',
    component: SaidaArmasFormComponent,
    canActivate: [
      SecurityGuard
    ],
    data: {
      acao: 'incluir',
      security: {
        roles: [
          'ROLE_MODELOARMA_VISUALIZAR',
          'ROLE_MODELOARMA_PESQUISAR'
        ]
      }
    },
    resolve: {
      tipoAmigos: TipoAmigoListResolve
    }
  },
  {
    path: 'listar',
    component: SaidaArmasListComponent,
    canActivate: [
      SecurityGuard
    ],
    data: {
      security: {
        roles: [
          'ROLE_MODELOARMA_VISUALIZAR',
          'ROLE_MODELOARMA_PESQUISAR'
        ]
      }
    },
    resolve: {
      tipoAmigos: TipoAmigoListResolve,
      amigos: SaidaArmasListResolve
    }
  },
  {
    path: ':id/alterar',
    component: SaidaArmasFormComponent,
    canActivate: [
      SecurityGuard
    ],
    data: {
      acao: 'alterar',
      security: {
        roles: [
          'ROLE_MODELOARMA_VISUALIZAR',
          'ROLE_MODELOARMA_PESQUISAR'
        ]
      }
    },
    resolve: {
      amigo: SaidaArmasResolve,
      tipoAmigos: TipoAmigoListResolve
    }
  },
  {
    path: ':id/visualizar',
    component: SaidaArmasFormComponent,
    canActivate: [
      SecurityGuard
    ],
    data: {
      acao: 'visualizar',
      security: {
        roles: [
          'ROLE_MODELOARMA_VISUALIZAR',
          'ROLE_MODELOARMA_PESQUISAR'
        ]
      }
    },
    resolve: {
      amigo: SaidaArmasResolve,
      tipoAmigos: TipoAmigoListResolve
    }
  },
  {
    path: '',
    redirectTo: 'listar',
    pathMatch: 'full'
  }
];
