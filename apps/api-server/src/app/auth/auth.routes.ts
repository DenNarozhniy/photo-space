import { Application } from 'express';
import { AuthController } from './auth.controller';
import * as authMiddleware from './auth.middleware';

export class AuthRoutes {

  public authController = new AuthController();

  public routes(app: Application): void {

    app.route('/api/register-user')
      .post(this.authController.registerUser);

    app.route('/api/login')
      .post(this.authController.login);

    app.route('/api/get-users')
      .get(authMiddleware.authVerify, this.authController.getUsers);

    app.route(`/api/update-user/:id`)
      .put(this.authController.updateUser);

    app.route('/api/delete-user/:id')
      .delete(this.authController.deleteUser);
  }
}

