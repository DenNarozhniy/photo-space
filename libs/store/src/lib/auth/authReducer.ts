import { Action, createReducer, on } from '@ngrx/store';

import * as AuthActions from './auth.action';
import { AuthState, initializeState } from './auth.state';
import { User } from "@photo-space/models";


export const initialState = initializeState();


const reducer = createReducer(
  initialState,
  on(AuthActions.LoginSuccessAction, (state: AuthState, user: User) => {
    return {
      ...state,
      CurrentUser: user,
      isLogin: true,
      AuthError: null,
    };
  }),
  on(AuthActions.GetAllUsersSuccessAction, (state: AuthState, { payload }) => {
    return { ...state, Users: payload};
  }),
  on(AuthActions.ErrorAuthAction, (state: AuthState, error: Error) => {
    return { ...state, AuthError: error };
  })
);

export function authReducer(state: AuthState | undefined, action: Action) {
  return reducer(state, action);
}
