import { PortfolioSchema } from '../../models/portfolio';

export class PortfolioController {

  public getPortfolio = (req, res, next) => {
    PortfolioSchema.find( (error, data) => {
      if (error) {
        return next(error);
      } else {
        res.status(200).json({
          data
        });
      }
    });
  }

  public addPortfolio = (req, res) => {
    const portfolioItem = {
      title: req.body.title,
      title_translit: req.body.title_translit,
      img_cover_url: {
        phone: req.body.img_cover_url.phone,
        tablet: req.body.img_cover_url.tablet,
        desktop: req.body.img_cover_url.desktop,
      },
      short_description: req.body.short_description,
      isShow: req.body.isShow,
      order: req.body.order,
      photos: [],
      sameAlbums: [],
      portfolio_descriptions: []
    };
    PortfolioSchema.create(portfolioItem, (err, doc) => {
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

  public updatePortfolio = (req, res, next) => {
    PortfolioSchema.findByIdAndUpdate(req.body._id, {
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

  public deletePortfolio = (req, res, next) => {
    PortfolioSchema.findByIdAndRemove(req.params.id, (error, data) => {
      if (error) {
        return next(error);
      } else {
        res.status(200).json({
          msg: data
        });
      }
    });
  }

  /** port photo start */
  public addPortPhoto = (req, res) => {
    const photo = {
      url_1: req.body.url_1,
      url_2: req.body.url_2,
      isDouble: req.body.isDouble,
      isShow: req.body.isShow,
      order: req.body.order,
    };

    PortfolioSchema.updateOne({_id: req.body.portfolio_item_id}, {
      $push: {
        photos: photo,
      }
    }, (err, doc) => {
      if (err) {
        return res.status(500).json({
          err
        });
      }
      PortfolioSchema.findById(req.body.portfolio_item_id, (error, portfolioItem) => {
        if (error) {
          return res.status(500).json({
            error
          });
        }
        res.status(201).json({
          message: 'Photo was added successfully.',
          item: portfolioItem.photos[portfolioItem.photos.length - 1],
        });
      });
    });
  }

  public updatePortPhoto = (req, res, next) => {
    const item = {
      'photos.$.url_1': req.body.item.url_1,
      'photos.$.url_2': req.body.item.url_2,
      'photos.$.isDouble': req.body.item.isDouble,
      'photos.$.isShow': req.body.item.isShow,
      'photos.$.order': req.body.item.order,
    };
    PortfolioSchema.findOneAndUpdate({_id: req.body.portfolio_item_id, 'photos._id': req.body.item._id }, {
      $set: item
    }, (error, data) => {
      if (error) {
        next(error);
      } else {
        res.status(201).json(
          data.photos.find(it => it._id == req.body.item._id )
        );
      }
    });
  }

  public deletePortPhoto = (req, res, next) => {
    PortfolioSchema.findOneAndUpdate(
      { _id: req.params.portfolio_item_id},
      { $pull: { photos: { _id: req.params.id } } },
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

  /** port photo end */


  /** port photo description start */
  public addPortPhotoDescription = (req, res) => {
    const photoDescription = {
      title: req.body.title,
      text: req.body.text,
      ownedByPhoto: req.body.ownedByPhoto,
      isShow: req.body.isShow,
    };

    PortfolioSchema.updateOne({_id: req.body.portfolio_item_id}, {
      $push: {
        portfolio_descriptions: photoDescription,
      }
    }, (err, doc) => {
      if (err) {
        return res.status(500).json({
          err
        });
      }
      PortfolioSchema.findById(req.body.portfolio_item_id, (error, portfolioItem) => {
        if (error) {
          return res.status(500).json({
            error
          });
        }
        res.status(201).json({
          message: 'Photo was added successfully.',
          item: portfolioItem.portfolio_descriptions[portfolioItem.portfolio_descriptions.length - 1],
        });
      });
    });
  }

  public updatePortPhotoDescription = (req, res, next) => {
    const item = {
      'portfolio_descriptions.$.title': req.body.item.title,
      'portfolio_descriptions.$.text': req.body.item.text,
      'portfolio_descriptions.$.ownedByPhoto': req.body.item.ownedByPhoto,
      'portfolio_descriptions.$.isShow': req.body.item.isShow,
    };
    PortfolioSchema.findOneAndUpdate({_id: req.body.portfolio_item_id, 'portfolio_descriptions._id': req.body.item._id }, {
      $set: item
    }, (error, data) => {
      if (error) {
        next(error);
      } else {
        res.status(201).json(
          data.portfolio_descriptions.find(it => it._id == req.body.item._id )
        );
      }
    });
  }

  public deletePortPhotoDescription = (req, res, next) => {
    PortfolioSchema.findOneAndUpdate(
      { _id: req.params.portfolio_item_id},
      { $pull: { portfolio_descriptions: { _id: req.params.id } } },
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

  /** port photo description end */


  /** portfolio same albums start */
  public addPortfolioSameAlbum = (req, res) => {

  }

  public updatePortfolioSameAlbum = (req, res, next) => {

  }

  public deletePortfolioSameAlbum = (req, res, next) => {

  }

  /** portfolio same albums end */

}
