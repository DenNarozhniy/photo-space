import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {PortfolioComponent} from './portfolio.component';
import {PortfolioDetailComponent} from "./portfolio-detail/portfolio-detail.component";

const routes: Routes = [
  {path: '', component: PortfolioComponent},
  {path: ':name', component: PortfolioDetailComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class PortfolioRoutingModule {}
