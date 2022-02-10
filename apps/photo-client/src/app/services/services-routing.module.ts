import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { ServicesComponent } from './services.component';
import { ServiceDetailComponent } from './service-detail/service-detail.component';

const routes: Routes = [
  { path: '', component: ServicesComponent },
  { path: ':name', component: ServiceDetailComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class ServicesRoutingModule {}
