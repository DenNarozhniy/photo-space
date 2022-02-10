import { Component, OnInit } from '@angular/core';
import {props, Store} from "@ngrx/store";
import {CoreState, loadPortfolio, getPortfolio, getPortfolioDetail} from "@photo-space/core-store";
import {Observable} from "rxjs";
import {IPortfolioDetailData} from "@photo-space/models";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-portfolio-detail',
  templateUrl: './portfolio-detail.component.html',
  styleUrls: ['./portfolio-detail.component.scss']
})
export class PortfolioDetailComponent implements OnInit {

  public portfolio$: Observable<IPortfolioDetailData>;

  constructor(
    private activatedRoute: ActivatedRoute,
    private store: Store<{core: CoreState}>
  ) {
    this.store.dispatch(loadPortfolio());
  }

  ngOnInit() {
    this.portfolio$ = this.store.select(getPortfolioDetail, { name: this.activatedRoute.snapshot.params.name });
  }

}
