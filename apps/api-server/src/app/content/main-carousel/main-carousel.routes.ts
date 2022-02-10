import { Application } from 'express';
import { MainCarouselController } from './main-carousel.controller';

export class MainCarouselRoutes {

  public mainCarouselController = new MainCarouselController();

  public routes(app: Application): void {

    app.get('/api/main-carousel', this.mainCarouselController.getMainCarouselItems);

    app.post('/api/main-carousel', this.mainCarouselController.addMainCarouselItem);

    app.put('/api/main-carousel', this.mainCarouselController.updateMainCarouselItem);

    app.delete('/api/main-carousel/:id', this.mainCarouselController.deleteMainCarouselItem);
  }
}
