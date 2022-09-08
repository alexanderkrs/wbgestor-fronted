import { NgModule } from '@angular/core';
import { NgxMaskModule } from 'ngx-mask';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../../layouts/material.module';


import { OrderModule } from 'ngx-order-pipe';
import { AmigoRoutes } from './saida-armas.routing';
import { MessageModule } from '../../shared/message/message.module';
import { ValidationModule } from '../../shared/validation/validation.module';
import { SaidaArmasFormComponent } from './saida-armas-form/saida-armas-form.component';
import { SaidaArmasListComponent } from './saida-armas-list/saida-armas-list.component';
import { SaidaArmasClientModule } from './shared/saida-armas-client/saida-armas-client.module';

@NgModule({
  declarations: [
    SaidaArmasFormComponent,
    SaidaArmasListComponent
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
    SaidaArmasClientModule,
    NgxMaskModule.forRoot({}),
    RouterModule.forChild(AmigoRoutes)
  ]
})
export class SaidaArmasModule { }
