import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModeloArmaResolve } from './modelo-arma.resolve';
import { ModeloArmaClientService } from './modelo-arma-client.service';
import {ModeloArmaListResolve} from './modelo-arma-list.resolve';


/**
 * Modulo de integração do projeto frontend com os serviços backend.
 */
@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    ModeloArmaClientService,
    ModeloArmaResolve,
    ModeloArmaListResolve
  ]
})
export class ModeloArmaClientModule { }
