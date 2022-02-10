import { Application } from 'express';
import { SquaredCarouselItemController } from './squared-carousel-item.controller';

export class SquaredCarouselItemRoutes {

  public squaredCarouselItemController = new SquaredCarouselItemController();

  public routes(app: Application): void {

    app.get('/api/square-carousel', this.squaredCarouselItemController.getAllSquaredCarousel);

    app.post('/api/square-carousel', this.squaredCarouselItemController.addSquaredCarousel);

    app.post('/api/square-carousel-img', this.squaredCarouselItemController.addImgForSquaredCarousel);

    app.put('/api/square-carousel', this.squaredCarouselItemController.updateSquaredCarousel);

    app.put('/api/square-carousel-img', this.squaredCarouselItemController.updateImgForSquaredCarousel);

    app.delete('/api/square-carousel/:id', this.squaredCarouselItemController.deleteSquaredCarousel);

    app.delete('/api/square-carousel-img/:squared_carousel_item_id/:id', this.squaredCarouselItemController.deleteImgForSquaredCarousel);
  }

}
