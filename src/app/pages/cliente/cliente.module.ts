import {NgModule} from '@angular/core';
import {NgxMaskModule} from 'ngx-mask';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {MaterialModule} from '../../layouts/material.module';


import {OrderModule} from 'ngx-order-pipe';
import {TipoAmigoRoutes} from './cliente.routing';
import {MessageModule} from '../../shared/message/message.module';
import {ValidationModule} from '../../shared/validation/validation.module';
import {ClienteFormComponent} from './cliente-form/cliente-form.component';
import {ClienteListComponent} from './cliente-list/cliente-list.component';
import {ClienteClientModule} from './shared/cliente-client/cliente-client.module';

@NgModule({
  declarations: [
    ClienteFormComponent,
    ClienteListComponent
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
    ClienteClientModule,
    NgxMaskModule.forRoot({}),
    RouterModule.forChild(TipoAmigoRoutes)
  ]
})
export class ClienteModule { }
