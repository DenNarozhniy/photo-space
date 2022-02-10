import { Component, OnInit } from '@angular/core';
import {Store} from "@ngrx/store";
import {CoreState, loadPortfolio, getAdvantages, getPortfolio} from "@photo-space/core-store";
import {Observable} from "rxjs";
import {Portfolio} from "@photo-space/models";

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {

  public portfolio$: Observable<Portfolio[]>;

  constructor(
    private store: Store<{core: CoreState}>
  ) { }

  ngOnInit() {
    this.store.dispatch(loadPortfolio());
    this.portfolio$ = this.store.select(getPortfolio);
  }

}
