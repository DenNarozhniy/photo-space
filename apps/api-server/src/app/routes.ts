import { ImgRoutes } from './img-crud/img.routes';
import { AuthRoutes } from './auth/auth.routes';
import { AdvantageRoutes } from './content/advantages/advantage.routes';
import { PhotoServiceRoutes } from './content/photo-services/photo-service.routes';
import { AboutMeRoutes } from './content/about-me/about-me.routes';
import { SquaredCarouselItemRoutes } from './content/squared-carousel-item/squared-carousel-item.routes';
import { PortfolioRoutes } from './content/portfolio/portfolio.routes';
import { ContactInfoRoutes } from './content/contact-info/contact-info.routes';
import { MainCarouselRoutes } from './content/main-carousel/main-carousel.routes';

export class Routes {

  public allRoutes(app) {
    new ImgRoutes().routes(app);
    new AuthRoutes().routes(app);
    new AboutMeRoutes().routes(app);
    new AdvantageRoutes().routes(app);
    new PhotoServiceRoutes().routes(app);
    new PortfolioRoutes().routes(app);
    new ContactInfoRoutes().routes(app);
    new MainCarouselRoutes().routes(app);
    new SquaredCarouselItemRoutes().routes(app);
  }

}
