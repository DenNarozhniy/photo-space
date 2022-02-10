import { AdvantagesComponent } from './advantages.component';
import { AuthGuard } from './../core/guards/auth.guard';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {path: '',component: AdvantagesComponent, canActivate: [AuthGuard],}
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class AdvantagesRoutingModule {}
