import { AdvantageSchema } from '../../models/advantages';


export class AdvantageController {

  public addAdvantage = (req, res) => {
    const advantage = {
      title: req.body.title,
      text: req.body.text,
      order: req.body.order,
      isShow: req.body.isShow
    };
    AdvantageSchema.create(advantage , ( err, doc ) => {
      if (err) {
        return res.status(500).json({
          err
        });
      }
      res.status(201).json({
        message: 'Advantage were create successfully.',
        item: doc
      });
    });
  }

  public updateAdvantage = (req, res, next) => {
    AdvantageSchema.findByIdAndUpdate(req.body._id, {
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

  public deleteAdvantage = (req, res, next) => {
    AdvantageSchema.findByIdAndRemove(req.params.id, (error, data) => {
      if (error) {
        return next(error);
      } else {
        res.status(200).json({
          msg: data
        });
      }
    });
  }

  public getAdvantages = (req, res, next) => {
    AdvantageSchema.find( (error, data) => {
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
