import { Routes } from '@angular/router';

import { SecurityGuard } from '../../shared/security/security.guard';
import { EntradaArmaResolve } from './shared/entrada-arma-client/entrada-arma.resolve';
import { EntradaArmaFormComponent } from './entrada-arma-form/entrada-arma-form.component';

/**
 * Configurações de rota de Usuário.
 *
 * @author Guiliano Rangel (UEG)
 */
export const EntradaArmasRoutes: Routes = [
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
          'ROLE_ENTRADAARMA_INCLUIR'
        ]
      }
    },
  },

  {
    path: '',
    redirectTo: 'incluir',
    pathMatch: 'full'
  }
];
