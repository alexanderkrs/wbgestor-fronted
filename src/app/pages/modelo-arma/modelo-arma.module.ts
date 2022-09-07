import {NgModule} from '@angular/core';
import {NgxMaskModule} from 'ngx-mask';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {MaterialModule} from '../../layouts/material.module';


import {OrderModule} from 'ngx-order-pipe';
import {TipoAmigoRoutes} from './modelo-arma.routing';
import {MessageModule} from '../../shared/message/message.module';
import {ValidationModule} from '../../shared/validation/validation.module';
import {ModeloArmaFormComponent} from './modelo-arma-form/modelo-arma-form.component';
import {ModeloArmaListComponent} from './modelo-arma-list/modelo-arma-list.component';
import {ModeloArmaClientModule} from './shared/modelo-arma-client/modelo-arma-client.module';

@NgModule({
  declarations: [
    ModeloArmaFormComponent,
    ModeloArmaListComponent

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
    ModeloArmaClientModule,
    NgxMaskModule.forRoot({}),
    RouterModule.forChild(TipoAmigoRoutes)
  ]
})
export class ModeloArmaModule { }
