import { createAction, props } from '@ngrx/store';
import { User } from '@photo-space/models';

export const LoginSuccessAction = createAction(
  '[Auth] - Login success',
  props<User>()
);

export const GetAllUsersSuccessAction = createAction(
  '[Auth] - Get all users success',
  props<{ payload: User[] }>()
);

export const ErrorAuthAction = createAction(
  '[Auth] - Error',
  props<Error>()
);
