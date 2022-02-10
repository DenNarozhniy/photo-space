import { ContactInfoSchema } from '../../models/contact-info';

export class ContactInfoController {

  public addContactInfo = (req, res) => {
    const contactItem = {
      city: req.body.city,
      country: req.body.country,
      facebook_url: req.body.facebook_url,
      viber_url: req.body.viber_url,
      messanger_url: req.body.messanger_url,
      telegram_url: req.body.telegram_url,
      instagram_url: req.body.instagram_url,
      email_address: req.body.email_address,
      phone_numbers: [],
      instagram_photos: [],
    };

    ContactInfoSchema.create(contactItem, (err, doc) => {
      if (err) {
        return res.status(500).json({
          err
        });
      }
      res.status(201).json({
        message: 'Contact item were create successfully.',
        item: doc
      });
    });
  }

  public getContactInfo = (req, res, next) => {
    ContactInfoSchema.find( (error, data) => {
      if (error) {
        return next(error);
      } else {
        res.status(200).json({
          data
        });
      }
    });
  };

  public addPhoneNumber = (req, res) => {
    const phoneNumber = {
      label: req.body.label,
      number: req.body.number,
      isShow: req.body.isShow,
      order: req.body.order,
    };

    ContactInfoSchema.updateOne({_id: req.body.contact_info_item_id}, {
      $push: {
        phone_numbers: phoneNumber,
      }
    }, (err, doc) => {
      if (err) {
        return res.status(500).json({
          err
        });
      }
      ContactInfoSchema.findById(req.body.contact_info_item_id, (error, contactInfo) => {
        if (error) {
          return res.status(500).json({
            error
          });
        }
        res.status(201).json( {
          message: 'Number was added successfully.',
          item: contactInfo.phone_numbers[contactInfo.phone_numbers.length - 1],
        });
      });
    });
  }

  public addInstagramPhoto = (req, res) => {
    const instPhoto = {
      photo_url: req.body.photo_url,
      insta_link: req.body.insta_link,
      order: req.body.order,
      isShow: req.body.isShow,
    };

    ContactInfoSchema.updateOne({_id: req.body.contact_info_item_id}, {
      $push: {
        instagram_photos: instPhoto,
      }
    }, (err, doc) => {
      if (err) {
        return res.status(500).json({ err });
      }
      ContactInfoSchema.findById(req.body.contact_info_item_id, (error, contactInfo) => {
        if (err) {
          return res.status(500).json({
            error
          });
        }
        res.status(201).json( {
          message: 'ContactInfo item was added successfully.',
          item: contactInfo.instagram_photos[contactInfo.instagram_photos.length - 1],
        });
      });
    });
  }

  public updateContactInfo = (req, res, next) => {
    ContactInfoSchema.findByIdAndUpdate(req.body._id, {
      $set: req.body
    }, (error, data) => {
      if (error) {
        return res.status(500).json({
          error
        });
      } else {
        res.status(201).json(data);
      }
    });
  }

  public updatePhoneNumber = (req, res, next) => {
    const item = {
      'phone_numbers.$.label': req.body.item.label,
      'phone_numbers.$.number': req.body.item.number,
      'phone_numbers.$.isShow': req.body.item.isShow,
      'phone_numbers.$.order': req.body.item.order,
    }
    ContactInfoSchema.findOneAndUpdate({_id: req.body.contact_info_item_id, 'phone_numbers._id': req.body.item._id }, {
      $set: item
    }, (error, data) => {
      if (error) {
        next(error);
      } else {
        res.status(201).json(
          data.phone_numbers.find(it => it._id == req.body.item._id )
        );
      }
    });
  }

  public updateInstagramPhoto = (req, res, next) => {
    const item = {
      'instagram_photos.$.photo_url': req.body.item.photo_url,
      'instagram_photos.$.insta_link': req.body.item.insta_link,
      'instagram_photos.$.order': req.body.item.order,
      'instagram_photos.$.isShow': req.body.item.isShow,
    }
    ContactInfoSchema.findOneAndUpdate({_id: req.body.contact_info_item_id, 'instagram_photos._id': req.body.item._id }, {
      $set: item
    }, (error, data) => {
      if (error) {
        next(error);
      } else {
        res.status(201).json(
          data.instagram_photos.find(it => it._id == req.body.item._id )
        );
      }
    });
  }

  public deleteContactInfo = (req, res, next) => {
    ContactInfoSchema.findByIdAndRemove(req.params.id, (error, data) => {
      if (error) {
        return next(error);
      } else {
        res.status(200).json({
          msg: data
        });
      }
    });
  }

  public deletePhoneNumber = (req, res, next) => {
    ContactInfoSchema.findOneAndUpdate(
      { _id: req.params.contactInfoId},
      { $pull: { phone_numbers: { _id: req.params.id } } },
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

  public deleteInstaPhoto = (req, res, next) => {
    ContactInfoSchema.findOneAndUpdate(
      { _id: req.params.contactInfoId},
      { $pull: { instagram_photos: { _id: req.params.id } } },
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
