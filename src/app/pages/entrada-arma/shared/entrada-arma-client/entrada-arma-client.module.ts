import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EntradaArmaResolve } from './entrada-arma.resolve';
import { EntradaArmaClientService } from './entrada-arma-client.service';


/**
 * Modulo de integração do projeto frontend com os serviços backend.
 */
@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    EntradaArmaClientService,
    EntradaArmaResolve,
  ]
})
export class EntradaArmaClientModule { }
