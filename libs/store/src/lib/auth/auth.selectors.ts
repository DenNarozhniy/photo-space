import { createFeatureSelector, createSelector } from '@ngrx/store';

import { AuthState } from './auth.state';

export const featureSelector = createFeatureSelector<AuthState>('auth');
export const selectLogedUser = createSelector(featureSelector, (state: AuthState) => state.CurrentUser);
export const selectIsLogin = createSelector(featureSelector, (state: AuthState) => state.isLogin);
