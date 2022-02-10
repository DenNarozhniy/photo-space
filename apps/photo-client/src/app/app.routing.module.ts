import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { ContactsComponent } from './contacts/contacts.component';

const routes: Routes = [
    {path: '', loadChildren: () => import('./home/home.module').then(m => m.HomeModule)},
    {path: 'services', loadChildren: () => import('./services/services.module').then(m => m.ServicesModule)},
    {path: 'portfolio', loadChildren: () => import('./portfolio/portfolio.module').then(m => m.PortfolioModule)},
    {path: 'contacts', component: ContactsComponent},
    {path: '**', redirectTo: '', pathMatch: 'full'}
  ]
  
  
  @NgModule({
    imports: [
      RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})
    ],
    exports: [
      RouterModule
    ]
  })
  export class AppRoutingModule {
  
  }