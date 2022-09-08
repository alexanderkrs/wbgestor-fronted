import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {TrafegarArmasResolve} from './trafegar-armas.resolve';
import {TrafegarArmasClientService} from './trafegar-armas-client.service';
import {TipoAmigoListResolve} from '../../../tipo-amigo/shared/tipo-amigo-client/tipo-amigo-list.resolve';
import {TrafegarArmasListResolve} from './trafegar-armas-list.resolve';


/**
 * Modulo de integração do projeto frontend com os serviços backend.
 */
@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    TrafegarArmasClientService,
    TrafegarArmasResolve,
    TipoAmigoListResolve,
    TrafegarArmasListResolve
  ]
})
export class TrafegarArmasClientModule { }
