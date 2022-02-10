import { Application } from 'express';
import { PortfolioController } from './portfolio.controller';

export class PortfolioRoutes {

  public portfolioController = new PortfolioController();

  public routes(app: Application): void {

    app.get('/api/portfolio', this.portfolioController.getPortfolio);

    app.post('/api/portfolio', this.portfolioController.addPortfolio);

    app.put('/api/portfolio', this.portfolioController.updatePortfolio);

    app.delete('/api/portfolio/:id', this.portfolioController.deletePortfolio);


    app.post('/api/portfolio-photo', this.portfolioController.addPortPhoto);

    app.put('/api/portfolio-photo', this.portfolioController.updatePortPhoto);

    app.delete('/api/portfolio-photo/:portfolio_item_id/:id', this.portfolioController.deletePortPhoto);


    app.post('/api/portfolio-photo-description', this.portfolioController.addPortPhotoDescription);

    app.put('/api/portfolio-photo-description', this.portfolioController.updatePortPhotoDescription);

    app.delete('/api/portfolio-photo-description/:portfolio_item_id/:id', this.portfolioController.deletePortPhotoDescription);


    app.post('/api/portfolio-same-album', this.portfolioController.addPortfolioSameAlbum);

    app.put('/api/portfolio-same-album', this.portfolioController.updatePortfolioSameAlbum);

    app.delete('/api/portfolio-same-album/:portfolio_item_id/:id', this.portfolioController.deletePortfolioSameAlbum);

  }

}
