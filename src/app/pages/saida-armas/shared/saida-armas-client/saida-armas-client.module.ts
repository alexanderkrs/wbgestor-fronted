import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {SaidaArmasResolve} from './saida-armas.resolve';
import {SaidaArmasClientService} from './saida-armas-client.service';
import {TipoAmigoListResolve} from '../../../tipo-amigo/shared/tipo-amigo-client/tipo-amigo-list.resolve';
import {SaidaArmasListResolve} from './saida-armas-list.resolve';


/**
 * Modulo de integração do projeto frontend com os serviços backend.
 */
@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    SaidaArmasClientService,
    SaidaArmasResolve,
    TipoAmigoListResolve,
    SaidaArmasListResolve
  ]
})
export class SaidaArmasClientModule { }
