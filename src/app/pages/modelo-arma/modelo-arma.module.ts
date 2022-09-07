import {NgModule} from '@angular/core';
import {NgxMaskModule} from 'ngx-mask';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {MaterialModule} from '../../layouts/material.module';


import {OrderModule} from 'ngx-order-pipe';
<<<<<<<< HEAD:src/app/pages/entrada-arma/entrada-arma.module.ts
import {TipoAmigoRoutes} from './entrada-arma.routing';
import {MessageModule} from '../../shared/message/message.module';
import {ValidationModule} from '../../shared/validation/validation.module';
import {EntradaArmaFormComponent} from './entrada-arma-form/entrada-arma-form.component';
import {EntradaArmaClientModule} from './shared/entrada-arma-client/entrada-arma-client.module';

@NgModule({
  declarations: [
    EntradaArmaFormComponent,
========
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
>>>>>>>> osmar-frontend:src/app/pages/modelo-arma/modelo-arma.module.ts
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
<<<<<<<< HEAD:src/app/pages/entrada-arma/entrada-arma.module.ts
    EntradaArmaClientModule,
========
    ModeloArmaClientModule,
>>>>>>>> osmar-frontend:src/app/pages/modelo-arma/modelo-arma.module.ts
    NgxMaskModule.forRoot({}),
    RouterModule.forChild(TipoAmigoRoutes)
  ]
})
<<<<<<<< HEAD:src/app/pages/entrada-arma/entrada-arma.module.ts
export class EntradaArmaModule { }
========
export class ModeloArmaModule { }
>>>>>>>> osmar-frontend:src/app/pages/modelo-arma/modelo-arma.module.ts
