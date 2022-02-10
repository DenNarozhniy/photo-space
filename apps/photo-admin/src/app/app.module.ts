import { AuthStoreModule } from './../../../../libs/store/src/lib/auth/auth-store.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { TokenInterceptor } from './core/interceptors/token.interceptor';
import { CommonStoreModule } from './../../../../libs/store/src/lib/common-store.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CoreStoreModule } from './../../../../libs/store/src/lib/core/core-store.module';
import { DynamicFormsModule } from './../../../../libs/dynamic-forms/src/lib/dynamic-forms.module';
import { EventNewFieldWrapperComponent } from './event-new-field-wrapper/event-new-field-wrapper.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { EditorModule } from '@progress/kendo-angular-editor';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [AppComponent, EventNewFieldWrapperComponent, DashboardComponent],
  imports: [
    EditorModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    CommonStoreModule,
    AuthStoreModule,
    CoreStoreModule,
    CommonModule,
    BrowserModule,
  ],
  providers: [
    {
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptor,
    multi: true
  }
],
  bootstrap: [AppComponent],
})
export class AppModule {}
