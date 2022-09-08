import { Routes } from '@angular/router';
import {SecurityGuard} from '../../shared/security/security.guard';
import {AdministracaoComponent} from './administracao.component';
import {LayoutComponent} from '../../layouts/layout.component';

/**
 * Configuração de 'Rotas' do módulo 'Home'.
 *
 * @author Guiliano Rangel (UEG)
 */
export const AdministracaoRoutes: Routes = [
  {
    path: 'administracao',
    component: LayoutComponent,
    canActivate: [
      SecurityGuard
    ],
    data: {
      security: {
        roles: [
          'ROLE_GRUPO_INCLUIR',
          'ROLE_GRUPO_ALTERAR',
          'ROLE_GRUPO_PESQUISAR',
          'ROLE_GRUPO_VISUALIZAR',
          'ROLE_GRUPO_ATIVAR_INATIVAR',
          'ROLE_USUARIO_PESQUISAR',
          'ROLE_USUARIO_INCLUIR',
          'ROLE_USUARIO_VISUALIZAR',
          'ROLE_USUARIO_ATIVAR_INATIVAR',
          'ROLE_USUARIO_VINCULAR_GRUPO',
          'ROLE_AUDITORIA_PESQUISAR',
          'ROLE_PORTAL_AUDITORIA_EXPORTAR',

          'ROLE_TIPOAMIGO_INCLUIR',
          'ROLE_TIPOAMIGO_ALTERAR',
          'ROLE_TIPOAMIGO_PESQUISAR',
          'ROLE_TIPOAMIGO_VISUALIZAR',
          'ROLE_TIPOAMIGO_REMOVER',

          'ROLE_AMIGO_INCLUIR',
          'ROLE_AMIGO_ALTERAR',
          'ROLE_AMIGO_PESQUISAR',
          'ROLE_AMIGO_VISUALIZAR',
          'ROLE_AMIGO_REMOVER',
          'ROLE_AMIGO_STATUS',

          'ROLE_MODELOARMA_INCLUIR',
          'ROLE_MODELOARMA_ALTERAR',
          'ROLE_MODELOARMA_PESQUISAR',
          'ROLE_MODELOARMA_VISUALIZAR',

          'ROLE_CLIENTE_INCLUIR',
          'ROLE_CLIENTE_ALTERAR',
          'ROLE_CLIENTE_PESQUISAR',
          'ROLE_CLIENTE_VISUALIZAR',
          'ROLE_CLIENTE_STATUS',

          'ROLE_GERENCIARARMA_VISUALIZAR',
          'ROLE_GERENCIARARMA_PESQUISAR',
          'ROLE_GERENCIARARMA_ALTERAR',

          'ROLE_TRAFEGARARMAS_OPERACAO',

          'ROLE_ENTRADAARMA_INCLUIR',

          'ROLE_SAIDAARMA_VENDIDASEMESTOQUE',
          'ROLE_SAIDAARMA_SAIDA',

        ]
      }
    },
    children: [
      {
        path: '',
        component: AdministracaoComponent
      },
      {
        path: 'grupo',  loadChildren: () => import('../grupo/grupo.module').then(m => m.GrupoModule)
      },
      {
        path: 'usuario', loadChildren: () => import('./../usuario/usuario.module').then(m => m.UsuarioModule)
      },
      {
        path: 'tipo-amigo', loadChildren: () => import('../tipo-amigo/tipo-amigo.module').then(m => m.TipoAmigoModule)
      },
      {
        path: 'modelo-arma', loadChildren: () => import('../modelo-arma/modelo-arma.module').then(m => m.ModeloArmaModule)
      },
      {
        path: 'entrada-arma', loadChildren: () => import('../entrada-arma/entrada-arma.module').then(m => m.EntradaArmaModule)
      },
      {
        path: 'cliente', loadChildren: () => import('../cliente/cliente.module').then(m => m.ClienteModule)
      },
    ]
  }
];
