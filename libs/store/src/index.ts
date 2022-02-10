import { ActionReducerMap } from '@ngrx/store';
import { AuthState, authReducer } from './lib/auth';
import { CoreState, coreReducer } from './lib/core';


export { CommonStoreModule } from './lib/common-store.module';


export interface State {
    auth: AuthState;
    core: CoreState;
    // logger: LoggerState
  }
  
  export const reducers: ActionReducerMap<State> = {
    auth: authReducer,
    core: coreReducer,
  };