import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { CoreAction } from './core.action';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { EMPTY } from 'rxjs';
import { AboutMeService, AdvantageService, ContactInfoService, PortfolioService, PhotoServiceService } from "@photo-space/api-services";

@Injectable()
export class CoreEffects {

  loadAboutMe$ = createEffect(() => this.actions$.pipe(
    ofType(CoreAction.LoadAboutMeInfo),
    mergeMap(() => this.aboutMeService.getAboutMes()
      .pipe(
        map((data) => ({type: CoreAction.SetAboutMeInfo, payload: data.data })),
        catchError(() => EMPTY)
      )
    )
  ));

  loadAdvantages$ = createEffect(() => this.actions$.pipe(
    ofType(CoreAction.LoadAdvantages),
    mergeMap(() => this.advantageService.getAdvantages()
      .pipe(
        map((data) => ({type: CoreAction.SetAdvantages, payload: data.data })),
        catchError(() => EMPTY)
      )
    )
  ));

  loadPhotoServices$ = createEffect(() => this.actions$.pipe(
    ofType(CoreAction.LoadPhotoServices),
    mergeMap(() => this.photoServiceService.getPhotoServices()
      .pipe(
        map((data) => ({type: CoreAction.LoadPhotoServicesSuccess, payload: data.data })),
        catchError(() => EMPTY)
      )
    )
  ));

  loadContactInfo$ = createEffect(() => this.actions$.pipe(
    ofType(CoreAction.LoadContactInfo),
    mergeMap(() => this.contactInfoService.getContactInfoData()
      .pipe(
        map((data) => ({type: CoreAction.SetContactInfo, payload: (data.data && data.data[0]) ? data.data[0] : null })),
        catchError(() => EMPTY)
      )
    )
  ));

  loadPortfolio$ = createEffect(() => this.actions$.pipe(
    ofType(CoreAction.LoadPortfolio),
    mergeMap(() => this.portfolioService.getPortfolioData()
      .pipe(
        map((data) => ({type: CoreAction.SetPortfolio, payload: data.data })),
        catchError(() => EMPTY)
      )
    )
  ));

  constructor(
    private actions$: Actions,
    private aboutMeService: AboutMeService,
    private advantageService: AdvantageService,
    private contactInfoService: ContactInfoService,
    private portfolioService: PortfolioService,
    private photoServiceService: PhotoServiceService,
  ) {}
}
