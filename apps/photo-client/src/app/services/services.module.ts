import { SharedComponentsModule } from './../../../../../libs/shared-components/src/lib/shared-components.module';
import {NgModule} from '@angular/core';
import {ServicesComponent} from './services.component';
import {ServicesRoutingModule} from './services-routing.module';
import { ServiceDetailComponent } from './service-detail/service-detail.component';
import {CommonModule} from "@angular/common";
import { ServicePriceViewComponent } from './service-detail/service-price-view/service-price-view.component';
import { FareDetailComponent } from './service-detail/service-price-view/fare-detail/fare-detail.component';
import { AngularMaterialModule } from '@photo-space/angular-material';
import { PipesModule } from '@photo-space/pipes';

@NgModule({
  declarations: [
    ServicesComponent,
    ServiceDetailComponent,
    ServicePriceViewComponent,
    FareDetailComponent
  ],
    imports: [
        ServicesRoutingModule,
        AngularMaterialModule,
        SharedComponentsModule,
        PipesModule,
        CommonModule
    ],
  providers: [],
})

export class ServicesModule { }
