import { SharedComponentsModule } from '@photo-space/shared-components';
import {NgModule} from '@angular/core';
import {HomeComponent} from './home.component';
import {HomeRoutingModule} from './home-routing.module';
import { MainSliderComponent } from './main-slider/main-slider.component';
import { InstagramComponent } from './instagram/instagram.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { AdvantagesComponent } from './advantages/advantages.component';
import { HomeServicesComponent } from './home-services/home-services.component';
import { ProfessionalPhotoInfoComponent } from './professional-photo-info/professional-photo-info.component';
import { PortraitExampleComponent } from './portrait-example/portrait-example.component';
import {CommonModule} from '@angular/common';

@NgModule({
  declarations: [
    HomeComponent,
    MainSliderComponent,
    InstagramComponent,
    AboutUsComponent,
    AdvantagesComponent,
    HomeServicesComponent,
    ProfessionalPhotoInfoComponent,
    PortraitExampleComponent,
  ],
  imports: [
    HomeRoutingModule,
    SharedComponentsModule,
    CommonModule
  ],
  providers: [],
})

export class HomeModule { }
