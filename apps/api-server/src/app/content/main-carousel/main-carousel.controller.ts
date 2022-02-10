import { MainCarouselSchema } from '../../models/main-carousel';


export class MainCarouselController {

  public addMainCarouselItem = (req, res) => {
    const mainCarouselItem = {
      smImgUrl: req.body.smImgUrl,
      mdImgUrl: req.body.mdImgUrl,
      lgImgUrl: req.body.lgImgUrl,
      text: req.body.text,
      order: req.body.order,
      redirectionLink: req.body.redirectionLink,
      isShow: req.body.isShow,
    };
    MainCarouselSchema.create(mainCarouselItem , ( err, doc ) => {
      if (err) {
        return res.status(500).json({
          err
        });
      }
      res.status(201).json({
        message: 'MainCarouselItem were create successfully.',
        item: doc
      });
    });
  }

  public updateMainCarouselItem = (req, res, next) => {
    MainCarouselSchema.findByIdAndUpdate(req.body._id, {
      $set: req.body
    }, (error, data) => {
      if (error) {
        return next(error);
      } else {
        res.status(201).json(data)
        console.log('Item successfully updated!');
      }
    });
  }

  public deleteMainCarouselItem = (req, res, next) => {
    MainCarouselSchema.findByIdAndRemove(req.params.id, (error, data) => {
      if (error) {
        return next(error);
      } else {
        res.status(200).json({
          msg: data
        });
      }
    });
  }

  public getMainCarouselItems = (req, res, next) => {
    MainCarouselSchema.find( (error, data) => {
      if (error) {
        return next(error);
      } else {
        res.status(200).json({
          data
        });
      }
    });
  }

}
