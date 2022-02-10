import { PhotoServiceSchema, IFare } from '../../models/photo-services';


export class PhotoServiceController {

  public addService = (req, res) => {
    const service = {
      main_title: req.body.main_title,
      sub_seo_title: req.body.sub_seo_title,
      name_ru: req.body.name_ru,
      name_en: req.body.name_en,
      isShow: req.body.isShow,
      order: req.body.order,
      main_description: req.body.main_description,
      img_cover: {
        phone: req.body.img_cover.phone,
        tablet: req.body.img_cover.tablet,
        desktop: req.body.img_cover.desktop,
      },
      price_header: req.body.price_header,
      description_title: req.body.description_title,
      fares: [],
      fare_calculator_items: {
        title: req.body.fare_calculator_items.title,
        currency: req.body.fare_calculator_items.currency,
        price: req.body.fare_calculator_items.price,
        description: req.body.fare_calculator_items.description,
        hoursDuration: req.body.fare_calculator_items.hoursDuration,
        calculatorServices: [],
      },
    };

    PhotoServiceSchema.create(service, (err, doc) => {
      if (err) {
        return res.status(500).json({
          err
        });
      }
      res.status(201).json({
        message: 'Service were create successfully.',
        item: doc
      });
    });
  }

  public getPhotoServices = (req, res, next) => {
    PhotoServiceSchema.find((error, data) => {
      if (error) {
        return next(error);
      } else {
        res.status(200).json({
          data
        });
      }
    });
  };

  public getPhotoServiceById = (req, res, next) => {
    console.log(req.query.id)
    PhotoServiceSchema.findById(req.query.id, (error, service) => {
      if (error) {
        return next(error);
      } else {
        res.status(200).json({
          service
        });
      }
    });
  }

  /** fare description crud start **/

  public addServiceFareDescription = (req, res) => {
    const description = {
      main_description: req.body.main_description,
      order: req.body.order,
      add_info: req.body.add_info,
    };

    PhotoServiceSchema.update({ _id: req.body.service_id, 'fares._id': req.body.fare_id }, {
      $push: {
        'fares.$.fareDescriptions': description,
      }
    }, (err, doc) => {
      if (err) {
        return res.status(500).json({ err });
      }
      res.status(201).json({
        message: 'fareDescriptions was added successfully.'
      });
    });
  }

  public updateServiceFareDescription = (req, res, next) => {
    PhotoServiceSchema.update({
      _id: req.body.service_id
    }, {
      $set: {
        'fares.$[fareId].fareDescriptions.$[descriptionId].main_description': req.body.item.main_description,
        'fares.$[fareId].fareDescriptions.$[descriptionId].add_info': req.body.item.add_info,
        'fares.$[fareId].fareDescriptions.$[descriptionId].order': req.body.item.order,
        'fares.$[fareId].fareDescriptions.$[descriptionId].isShow': req.body.item.isShow,
      }
    }, {
      arrayFilters: [
        { 'fareId._id': req.body.fare_id }, { 'descriptionId._id': req.body.item._id }]
    }, (error, data) => {
      if (error) {
        next(error);
      } else {
        res.status(201).json(
          data
        );
      }
    });
  }

  public deleteServiceFareDescription = (req, res, next) => {
    PhotoServiceSchema.findOneAndUpdate(
      { _id: req.params.serviceId, 'fares._id': req.params.fareId },
      { $pull: { 'fares.$.fareDescriptions': { _id: req.params.fareDescriptionId } } },
      (error, data) => {
        if (error) {
          return next(error);
        } else {
          res.status(200).json({
            msg: data
          });
        }
      }
    );
  }

  /**
   *  fare description crud ----end
   */


  /**
   *  fare addition info start
   */

  public addServiceFareAdditionInfo = (req, res) => {
    const tempItem = {
      title: req.body.title,
      order: req.body.order,
      text: req.body.text,
    };

    PhotoServiceSchema.update({ _id: req.body.service_id, 'fares._id': req.body.fare_id }, {
      $push: {
        'fares.$.add_info': tempItem,
      }
    }, (err, doc) => {
      if (err) {
        return res.status(500).json({ err });
      }
      res.status(201).json({
        message: 'fareDescriptions was added successfully.'
      });
    });
  }


  public updateServiceFareAdditionInfo = (req, res, next) => {
    PhotoServiceSchema.update({
      _id: req.body.service_id
    }, {
      $set: {
        'fares.$[fareId].add_info.$[addInfoId].title': req.body.item.title,
        'fares.$[fareId].add_info.$[addInfoId].order': req.body.item.order,
        'fares.$[fareId].add_info.$[addInfoId].text': req.body.item.text,
        'fares.$[fareId].add_info.$[addInfoId].isShow': req.body.item.isShow,
      }
    }, {
      arrayFilters: [
        { 'fareId._id': req.body.fare_id }, { 'addInfoId._id': req.body.item._id }]
    }, (error, data) => {
      if (error) {
        next(error);
      } else {
        res.status(201).json(
          data
        );
      }
    });
  }

  public deleteServiceFareAdditionInfo = (req, res, next) => {
    PhotoServiceSchema.findOneAndUpdate(
      { _id: req.params.serviceId, 'fares._id': req.params.fareId },
      { $pull: { 'fares.$.add_info': { _id: req.params.addInfoId } } },
      (error, data) => {
        if (error) {
          return next(error);
        } else {
          res.status(200).json({
            msg: data
          });
        }
      }
    );
  }

  /**
   * fare addition info ----- end
   */


  /**
   *  fare addition services start
   */
  public addServiceFareServices = (req, res) => {
    const tempItem = {
      title: req.body.title,
      order: req.body.order,
      price: req.body.price,
      isFroze: req.body.isFroze,
      selectedByDefault: req.body.selectedByDefault,
      description: req.body.description,
    };

    PhotoServiceSchema.update({ _id: req.body.service_id, 'fares._id': req.body.fare_id }, {
      $push: {
        'fares.$.addServices': tempItem,
      }
    }, (err, doc) => {
      if (err) {
        return res.status(500).json({ err });
      }
      res.status(201).json({
        message: 'fareDescriptions was added successfully.'
      });
    });
  }

  public updateServiceFareServices = (req, res, next) => {
    PhotoServiceSchema.update({
      _id: req.body.service_id
    }, {
      $set: {
        'fares.$[fareId].addServices.$[addServiceId].title': req.body.item.title,
        'fares.$[fareId].addServices.$[addServiceId].order': req.body.item.order,
        'fares.$[fareId].addServices.$[addServiceId].description': req.body.item.description,
        'fares.$[fareId].addServices.$[addServiceId].isShow': req.body.item.isShow,
        'fares.$[fareId].addServices.$[addServiceId].price': req.body.item.price,
        'fares.$[fareId].addServices.$[addServiceId].selectedByDefault': req.body.item.selectedByDefault,
      }
    }, {
      arrayFilters: [
        { 'fareId._id': req.body.fare_id }, { 'addServiceId._id': req.body.item._id }]
    }, (error, data) => {
      if (error) {
        next(error);
      } else {
        res.status(201).json(
          data
        );
      }
    });
  }

  public deleteServiceFareServices = (req, res, next) => {
    PhotoServiceSchema.findOneAndUpdate(
      { _id: req.params.serviceId, 'fares._id': req.params.fareId },
      { $pull: { 'fares.$.addServices': { _id: req.params.addServiceId } } },
      (error, data) => {
        if (error) {
          return next(error);
        } else {
          res.status(200).json({
            msg: data
          });
        }
      }
    );
  }

  /**
   *  fare addition services ---- end
   */

  public addServiceFare = (req, res) => {
    const fare = {
      main_title: req.body.main_title,
      price: req.body.price,
      currency: req.body.currency,
      hoursDuration: req.body.hoursDuration,
      order: req.body.order,
      add_info: [],
      addServices: [],
      fareDescriptions: [],
    };

    PhotoServiceSchema.updateOne({ _id: req.body.service_id }, {
      $push: {
        fares: fare,
      }
    }, (err, doc) => {
      if (err) {
        return res.status(500).json({
          err
        });
      }
      PhotoServiceSchema.findById(req.body.service_id, (error, service) => {
        if (error) {
          return res.status(500).json({
            error
          });
        }
        res.status(201).json({
          message: 'Fare was added successfully.',
          item: service.fares[service.fares.length - 1],
        });
      });
    });
  }

  public updateService = (req, res, next) => {
    PhotoServiceSchema.findByIdAndUpdate(req.body._id, {
      $set: req.body
    }, (error, data) => {
      if (error) {
        return res.status(500).json({
          error
        });
      } else {
        res.status(201).json(data);
        console.log('Item successfully updated!');
      }
    });
  }

  public updateServiceFare = (req, res, next) => {
    const item = {
      'fares.$.main_title': req.body.item.main_title,
      'fares.$.price': req.body.item.price,
      'fares.$.currency': req.body.item.currency,
      'fares.$.hoursDuration': req.body.item.hoursDuration,
      'fares.$.order': req.body.item.order,
      'fares.$.isFroze': req.body.item.isFroze,
    };
    PhotoServiceSchema.findOneAndUpdate({ _id: req.body.serviceId, 'fares._id': req.body.item._id }, {
      $set: item
    }, (error, data) => {
      if (error) {
        next(error);
      } else {
        res.status(201).json(
          data.fares.find(it => it._id == req.body.item._id)
        );
      }
    });
  }

  public deleteService = (req, res, next) => {
    PhotoServiceSchema.findByIdAndRemove(req.params.id, (error, data) => {
      if (error) {
        return next(error);
      } else {
        res.status(200).json({
          msg: data
        });
      }
    });
  }

  public deleteFareService = (req, res, next) => {
    PhotoServiceSchema.findOneAndUpdate(
      { _id: req.params.serviceId },
      { $pull: { fares: { _id: req.params.id } } },
      (error, data) => {
        if (error) {
          return next(error);
        } else {
          res.status(200).json({
            msg: data
          });
        }
      }
    );
  }

  /**
   *  calculator fare item start
   */
  public addCalculateFareItem = (req, res) => {
    const tempItem = {
      title: req.body.title,
      order: req.body.order,
      price: req.body.price,
      count: req.body.count,
      isFroze: req.body.isFroze,
      countStep: req.body.countStep,
      affectToTime: req.body.affectToTime,
      timeStep: req.body.timeStep,
      additionInfo: req.body.additionInfo,
      priceStep: req.body.priceStep,
      selectedByDefault: req.body.selectedByDefault,
      isSingleService: req.body.isSingleService,
      isShow: req.body.isShow,
    };

    PhotoServiceSchema.update({ _id: req.body.service_id }, {
      $push: {
        'fare_calculator_items.calculatorServices': tempItem,
      }
    }, (err, doc) => {
      if (err) {
        return res.status(500).json({ err });
      }
      res.status(201).json({
        message: 'calculatorServices was added successfully.'
      });
    });
  }

  public updateCalculateFareItem = (req, res, next) => {
    PhotoServiceSchema.update({
      _id: req.body.serviceId
    }, {
      $set: {
        'fare_calculator_items.calculatorServices.$[serviceId].title': req.body.item.title,
        'fare_calculator_items.calculatorServices.$[serviceId].order': req.body.item.order,
        'fare_calculator_items.calculatorServices.$[serviceId].additionInfo': req.body.item.additionInfo,
        'fare_calculator_items.calculatorServices.$[serviceId].count': req.body.item.count,
        'fare_calculator_items.calculatorServices.$[serviceId].countStep': req.body.item.countStep,
        'fare_calculator_items.calculatorServices.$[serviceId].isShow': req.body.item.isShow,
        'fare_calculator_items.calculatorServices.$[serviceId].affectToTime': req.body.item.affectToTime,
        'fare_calculator_items.calculatorServices.$[serviceId].timeStep': req.body.item.timeStep,
        'fare_calculator_items.calculatorServices.$[serviceId].price': req.body.item.price,
        'fare_calculator_items.calculatorServices.$[serviceId].priceStep': req.body.item.priceStep,
        'fare_calculator_items.calculatorServices.$[serviceId].isFroze': req.body.item.isFroze,
        'fare_calculator_items.calculatorServices.$[serviceId].selectedByDefault': req.body.item.selectedByDefault,
        'fare_calculator_items.calculatorServices.$[serviceId].isSingleService': req.body.item.isSingleService,
      }
    }, {
      arrayFilters: [
        { 'serviceId._id': req.body.item._id }]
    }, (error, data) => {
      if (error) {
        next(error);
      } else {
        res.status(201).json(
          data
        );
      }
    });
  }

  public deleteCalculateFareItem = (req, res, next) => {
    PhotoServiceSchema.findOneAndUpdate(
      { _id: req.params.serviceId },
      { $pull: { 'fare_calculator_items.calculatorServices': { _id: req.params.id } } },
      (error, data) => {
        if (error) {
          return next(error);
        } else {
          res.status(200).json({
            msg: data
          });
        }
      }
    );
  }

  /**
   *  calculator fare item ---- end
   */
}
