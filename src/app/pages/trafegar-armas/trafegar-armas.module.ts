import { NgModule } from '@angular/core';
import { NgxMaskModule } from 'ngx-mask';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../../layouts/material.module';


import { OrderModule } from 'ngx-order-pipe';
import { AmigoRoutes } from './trafegar-armas.routing';
import { MessageModule } from '../../shared/message/message.module';
import { ValidationModule } from '../../shared/validation/validation.module';
import { TrafegarArmasFormComponent } from './trafegar-armas-form/trafegar-armas-form.component';
import { TrafegarArmasListComponent } from './trafegar-armas-list/trafegar-armas-list.component';
import { TrafegarArmasClientModule } from './shared/trafegar-armas-client/trafegar-armas-client.module';

@NgModule({
  declarations: [
    TrafegarArmasFormComponent,
    TrafegarArmasListComponent
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
    TrafegarArmasClientModule,
    NgxMaskModule.forRoot({}),
    RouterModule.forChild(AmigoRoutes)
  ]
})
export class TrafegarArmasModule { }
