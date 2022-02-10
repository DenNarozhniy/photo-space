import { User } from '@photo-space/models';

export interface AuthState {
  Users: Array<User>;
  isLogin: boolean;
  CurrentUser: User;
  AuthError: Error;
}

export const initializeState = (): AuthState => {
  return {
    Users: Array<User>(),
    isLogin: false,
    CurrentUser: null,
    AuthError: null
  };
};
