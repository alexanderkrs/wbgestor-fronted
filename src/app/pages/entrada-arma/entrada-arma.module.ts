import {NgModule} from '@angular/core';
import {NgxMaskModule} from 'ngx-mask';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {MaterialModule} from '../../layouts/material.module';


import {OrderModule} from 'ngx-order-pipe';
import {TipoAmigoRoutes} from './entrada-arma.routing';
import {MessageModule} from '../../shared/message/message.module';
import {ValidationModule} from '../../shared/validation/validation.module';
import {EntradaArmaFormComponent} from './entrada-arma-form/entrada-arma-form.component';
import {EntradaArmaClientModule} from './shared/entrada-arma-client/entrada-arma-client.module';

@NgModule({
  declarations: [
    EntradaArmaFormComponent,
  ],
  entryComponents: [
  ],
  imports: [
    FormsModule,
    OrderModule,
    CommonModule,
    MessageModule,
    MaterialModule,
    ValidationModule,
    EntradaArmaClientModule,
    NgxMaskModule.forRoot({}),
    RouterModule.forChild(TipoAmigoRoutes)
  ]
})
export class EntradaArmaModule { }
