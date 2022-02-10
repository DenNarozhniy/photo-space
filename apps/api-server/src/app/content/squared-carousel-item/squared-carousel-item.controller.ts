import { ISquareImgForCarousel, SquaredCarouselItemSchema } from '../../models/squared-carousel-item';


export class SquaredCarouselItemController {

  public getAllSquaredCarousel = (req, res, next) => {
    SquaredCarouselItemSchema.find( (error, data) => {
      if (error) {
        return next(error);
      } else {
        res.status(200).json({
          data
        });
      }
    });
  }

  public addSquaredCarousel = (req, res) => {
    const carouselItem = {
      main_title: req.body.main_title,
    sub_title: req.body.sub_title,
    img_alt: req.body.img_alt,
    main_placement: req.body.main_placement,
    isShow: req.body.isShow,
    images: [],
    second_placement: req.body.second_placement,
    };
    SquaredCarouselItemSchema.create(carouselItem, (err, doc) => {
      if (err) {
        return res.status(500).json({
          err
        });
      }
      res.status(201).json({
        message: 'Item were create successfully.',
        item: doc
      });
    });
  }

  public updateSquaredCarousel = (req, res, next) => {
    SquaredCarouselItemSchema.findByIdAndUpdate(req.body._id, {
      $set: req.body
    }, (error, data) => {
      if (error) {
        return res.status(500).json({
          error
        });
      } else {
        res.status(201).json(data)
        console.log('Item successfully updated!');
      }
    });
  }

  public deleteSquaredCarousel = (req, res, next) => {
    SquaredCarouselItemSchema.findByIdAndRemove(req.params.id, (error, data) => {
      if (error) {
        return next(error);
      } else {
        res.status(200).json({
          msg: data
        });
      }
    });
  }

  public addImgForSquaredCarousel = (req, res) => {
    const img = {
      imgUrl: req.body.imgUrl,
      isShow: req.body.isShow,
      order: req.body.order,
    };

    SquaredCarouselItemSchema.updateOne({_id: req.body.squared_carousel_item_id}, {
      $push: {
        images: img,
      }
    }, (err, doc) => {
      if (err) {
        return res.status(500).json({
          err
        });
      }
      SquaredCarouselItemSchema.findById(req.body.squared_carousel_item_id, (error, carouselItem) => {
        if (error) {
          return res.status(500).json({
            error
          });
        }
        res.status(201).json({
          message: 'Img was added successfully.',
          item: carouselItem.images[carouselItem.images.length - 1],
        });
      });
    });
  }

  public updateImgForSquaredCarousel = (req, res, next) => {
    const item = {
      'images.$.imgUrl': req.body.item.imgUrl,
      'images.$.isShow': req.body.item.isShow,
      'images.$.order': req.body.item.order,
    }
    SquaredCarouselItemSchema.findOneAndUpdate({_id: req.body.squared_carousel_item_id, 'images._id': req.body.item._id }, {
      $set: item
    }, (error, data) => {
      if (error) {
        next(error);
      } else {
        res.status(201).json(
          data.images.find(it => it._id == req.body.item._id )
        );
      }
    });
  }

  public deleteImgForSquaredCarousel = (req, res, next) => {
    SquaredCarouselItemSchema.findOneAndUpdate(
      { _id: req.params.squared_carousel_item_id},
      { $pull: { images: { _id: req.params.id } } },
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

}
