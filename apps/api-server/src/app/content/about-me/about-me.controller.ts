import { AboutMeSchema } from '../../models/about-me';

export class AboutMeController {

  public addAboutMe = (req, res) => {
    const aboutMe = {
      title: req.body.title,
      text: req.body.text,
      subTitle: req.body.subTitle,
      image: req.body.image,
      footerText: req.body.footerText,
      order: req.body.order,
      isShow: req.body.isShow,
    };

    AboutMeSchema.create(aboutMe, ( err, doc ) => {
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

  public updateAboutMe = (req, res, next) =>  {
    console.log(req.body)
    AboutMeSchema.findByIdAndUpdate(req.body._id, {
      $set: req.body
    }, (error, data) => {
      if (error) {
        return next(error);
      } else {
        res.status(201).json(data);
      }
    });
  }

  public deleteAboutMe = (req, res, next) =>  {
    AboutMeSchema.findByIdAndRemove(req.params.id, (error, data) => {
      if (error) {
        return next(error);
      } else {
        res.status(200).json({
          msg: data
        });
      }
    });
  }

  public getAboutMe = (req, res, next) =>  {
    AboutMeSchema.find( (error, data) => {
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
