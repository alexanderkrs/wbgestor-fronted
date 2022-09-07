import { Routes } from '@angular/router';

import { SecurityGuard } from '../../shared/security/security.guard';
<<<<<<<< HEAD:src/app/pages/entrada-arma/entrada-arma.routing.ts
import { EntradaArmaResolve } from './shared/entrada-arma-client/entrada-arma.resolve';
import { EntradaArmaFormComponent } from './entrada-arma-form/entrada-arma-form.component';
========
import { ModeloArmaResolve } from './shared/modelo-arma-client/modelo-arma.resolve';
import { ModeloArmaFormComponent } from './modelo-arma-form/modelo-arma-form.component';
import { ModeloArmaListComponent } from './modelo-arma-list/modelo-arma-list.component';
import {ModeloArmaListResolve} from './shared/modelo-arma-client/modelo-arma-list.resolve';
>>>>>>>> osmar-frontend:src/app/pages/modelo-arma/modelo-arma.routing.ts

/**
 * Configurações de rota de Usuário.
 *
 * @author Guiliano Rangel (UEG)
 */
export const TipoAmigoRoutes: Routes = [
  {
    path: 'incluir',
<<<<<<<< HEAD:src/app/pages/entrada-arma/entrada-arma.routing.ts
    component: EntradaArmaFormComponent,
========
    component: ModeloArmaFormComponent,
>>>>>>>> osmar-frontend:src/app/pages/modelo-arma/modelo-arma.routing.ts
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
<<<<<<<< HEAD:src/app/pages/entrada-arma/entrada-arma.routing.ts
    path: ':id/alterar',
    component: EntradaArmaFormComponent,
========
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
>>>>>>>> osmar-frontend:src/app/pages/modelo-arma/modelo-arma.routing.ts
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
<<<<<<<< HEAD:src/app/pages/entrada-arma/entrada-arma.routing.ts
      tipoAmigo: EntradaArmaResolve,
========
      tipoAmigo: ModeloArmaResolve,
>>>>>>>> osmar-frontend:src/app/pages/modelo-arma/modelo-arma.routing.ts
    }
  },
  {
    path: ':id/visualizar',
<<<<<<<< HEAD:src/app/pages/entrada-arma/entrada-arma.routing.ts
    component: EntradaArmaFormComponent,
========
    component: ModeloArmaFormComponent,
>>>>>>>> osmar-frontend:src/app/pages/modelo-arma/modelo-arma.routing.ts
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
<<<<<<<< HEAD:src/app/pages/entrada-arma/entrada-arma.routing.ts
      tipoAmigo: EntradaArmaResolve
========
      tipoAmigo: ModeloArmaResolve
>>>>>>>> osmar-frontend:src/app/pages/modelo-arma/modelo-arma.routing.ts
    }
  },
  {
    path: '',
    redirectTo: 'incluir',
    pathMatch: 'full'
  }
];
