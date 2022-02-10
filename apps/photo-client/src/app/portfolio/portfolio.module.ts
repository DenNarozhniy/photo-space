import {NgModule} from '@angular/core';
import {PortfolioComponent} from './portfolio.component';
import {PortfolioRoutingModule} from './portfolio-routing.module';
import {CommonModule} from "@angular/common";
import { PortfolioDetailComponent } from './portfolio-detail/portfolio-detail.component';

@NgModule({
  declarations: [
    PortfolioComponent,
    PortfolioDetailComponent
  ],
    imports: [
        PortfolioRoutingModule,
        CommonModule
    ],
  providers: [],
})

export class PortfolioModule { }
