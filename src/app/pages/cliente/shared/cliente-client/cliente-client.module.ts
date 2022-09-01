import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClienteResolve } from './cliente.resolve';
import { ClienteClientService } from './cliente-client.service';


/**
 * Modulo de integração do projeto frontend com os serviços backend.
 */
@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    ClienteClientService,
    ClienteResolve
  ]
})
export class ClienteClientModule { }
