import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app.routing.module';
import { NavigationComponent } from './navigation/navigation.component';
import { ContactsComponent } from './contacts/contacts.component';
import { SiteFooterComponent } from './site-footer/site-footer.component';
import { CommonStoreModule } from '@photo-space/store';
import { AngularMaterialModule } from '@photo-space/angular-material';
import { CoreStoreModule } from  '@photo-space/core-store';
import { HttpClientModule } from '@angular/common/http';
import { PipesModule } from "@photo-space/pipes";
import { SharedComponentsModule } from "@photo-space/shared-components";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    ContactsComponent,
    SiteFooterComponent
  ],
  imports: [
    AppRoutingModule,
    AngularMaterialModule,
    HttpClientModule,
    CommonStoreModule,
    SharedComponentsModule,
    BrowserAnimationsModule,
    PipesModule,
    CoreStoreModule,
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
