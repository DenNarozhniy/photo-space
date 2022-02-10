import { Application } from 'express';
import { AboutMeController } from './about-me.controller';

export class AboutMeRoutes {

  public aboutMeController = new AboutMeController();

  public routes(app: Application): void {

    app.get('/api/about-me', this.aboutMeController.getAboutMe);

    app.post('/api/add-about-me', this.aboutMeController.addAboutMe);

    app.put('/api/update-about-me', this.aboutMeController.updateAboutMe);

    app.delete('/api/delete-about-me/:id', this.aboutMeController.deleteAboutMe);
  }
}
