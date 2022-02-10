import { AdvantageController } from './advantage.controller';
import { Application } from 'express';

export class AdvantageRoutes {

  public advantageController = new AdvantageController();

  public routes(app: Application): void {

    app.get('/api/advantages', this.advantageController.getAdvantages);

    app.post('/api/add-advantage', this.advantageController.addAdvantage);

    app.put('/api/update-advantage', this.advantageController.updateAdvantage);

    app.delete('/api/delete-advantage/:id', this.advantageController.deleteAdvantage);
  }
}
