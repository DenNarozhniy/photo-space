import { CoreState, initializeCoreState } from './core.state';
import { Action, createReducer, on } from '@ngrx/store';

import * as coreActions from './core.action';


export const initialCoreState = initializeCoreState();

const reducer = createReducer(
  initialCoreState,
  on(coreActions.setAboutMeInfo, (state: CoreState, { payload  }) => {
    return {
      ...state,
      aboutMe: payload,
    };
  }),
  on(coreActions.setAdvantages, (state: CoreState, { payload }) => {
    return {
      ...state,
      advantages: payload
    };
  }),
  on(coreActions.loadPhotoServicesSuccess, (state: CoreState, { payload }) => {
    return {
      ...state,
      photoServices: payload
    };
  }),
  on(coreActions.setContactInfo, (state: CoreState, { payload }) => {
    return {
      ...state,
      contactInfo: payload
    };
  }),
  on(coreActions.setPortfolio, (state: CoreState, { payload }) => {
    return {
      ...state,
      portfolio: payload
    };
  }),
)

export function coreReducer(state: CoreState | undefined, action: Action) {
  return reducer(state, action);
}
