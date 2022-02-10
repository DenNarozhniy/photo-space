import { createAction, props } from '@ngrx/store';
import { PhotoServiceItem, AboutMe, Advantage, ContactInfo, Portfolio } from '@photo-space/models';


export enum CoreAction {
  LoadPhotoServices = '[core] Load Photo Services',
  LoadPhotoServicesSuccess = '[core] Load Photo Services Success',
  LoadAboutMeInfo = '[core] Load AboutMe Info',
  SetAboutMeInfo = '[core] Set AboutMe Info',
  LoadAdvantages = '[core] Load Advantages',
  SetAdvantages = '[core] Set Advantages',
  LoadContactInfo = '[core] Load Contact Info',
  SetContactInfo = '[core] Set Contact Info',
  LoadPortfolio = '[core] Load portfolio',
  SetPortfolio = '[core] Set portfolio',
}

export const loadPhotoServices = createAction(
  CoreAction.LoadPhotoServices
);

export const loadPhotoServicesSuccess = createAction(
  CoreAction.LoadPhotoServicesSuccess,
  props<{payload: PhotoServiceItem[]}>()
);

export const loadAboutMeInfo = createAction(
  CoreAction.LoadAboutMeInfo
);

export const setAboutMeInfo = createAction(
  CoreAction.SetAboutMeInfo,
  props<{payload: AboutMe[]}>()
);

export const loadAdvantages = createAction(
  CoreAction.LoadAdvantages,
);

export const setAdvantages = createAction(
  CoreAction.SetAdvantages,
  props<{payload: Advantage[]}>()
);

export const loadContactInfo = createAction(
  CoreAction.LoadContactInfo,
);

export const setContactInfo = createAction(
  CoreAction.SetContactInfo,
  props<{payload: ContactInfo}>()
);

export const loadPortfolio = createAction(
  CoreAction.LoadPortfolio,
);

export const setPortfolio = createAction(
  CoreAction.SetPortfolio,
  props<{payload: Portfolio[]}>()
);
