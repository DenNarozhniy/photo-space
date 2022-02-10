import { PhotoServiceController } from './photo-service.controller';
import { Application } from 'express';


export class PhotoServiceRoutes {

  public photoServiceController = new PhotoServiceController();

  public routes(app: Application): void {

    app.get('/api/photo-services', this.photoServiceController.getPhotoServices);

    app.get('/api/photo-service', this.photoServiceController.getPhotoServiceById);

    app.post('/api/photo-service', this.photoServiceController.addService);

    app.put('/api/photo-service', this.photoServiceController.updateService);

    app.delete('/api/photo-service/:id', this.photoServiceController.deleteService);


    app.post('/api/photo-service-add-fare', this.photoServiceController.addServiceFare);

    app.put('/api/photo-service-update-fare', this.photoServiceController.updateServiceFare);

    app.delete('/api/photo-service-fare/:serviceId/:id', this.photoServiceController.deleteFareService);
    // --------------------------------
    app.post('/api/photo-service-fare-description', this.photoServiceController.addServiceFareDescription);

    app.put('/api/photo-service-fare-description', this.photoServiceController.updateServiceFareDescription);

    app.delete('/api/photo-service-fare-description/:serviceId/:fareId/:fareDescriptionId', this.photoServiceController.deleteServiceFareDescription);
    // --------------------------------
    app.post('/api/photo-service-fare-addition-info', this.photoServiceController.addServiceFareAdditionInfo);

    app.put('/api/photo-service-fare-addition-info', this.photoServiceController.updateServiceFareAdditionInfo);

    app.delete('/api/photo-service-fare-addition-info/:serviceId/:fareId/:addInfoId', this.photoServiceController.deleteServiceFareAdditionInfo);
    // --------------------------------
    app.post('/api/photo-service-fare-addition-services', this.photoServiceController.addServiceFareServices);

    app.put('/api/photo-service-fare-addition-services', this.photoServiceController.updateServiceFareServices);

    app.delete('/api/photo-service-fare-addition-services/:serviceId/:fareId/:addServiceId', this.photoServiceController.deleteServiceFareServices);



    // app.route('/api/photo-service-add-calculate-fare-item')
    //   .post(this.photoServiceController.addServiceCalculateItem);
    //
    // app.route('/api/photo-service-update-calculate-fare')
    //   .put(this.photoServiceController.updateFareCalculateItem);
    //
    // app.route('/api/photo-service-calculate-fare/:serviceId/:id')
    //   .delete(this.photoServiceController.deleteFareCalculate);
    // --------------------------------
    app.post('/api/photo-service-calculate-fare-item', this.photoServiceController.addCalculateFareItem);

    app.put('/api/photo-service-calculate-fare-item', this.photoServiceController.updateCalculateFareItem);

    app.delete('/api/photo-service-calculate-fare-item/:serviceId/:id', this.photoServiceController.deleteCalculateFareItem);




  }

}
