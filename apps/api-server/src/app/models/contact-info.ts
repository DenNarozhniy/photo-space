import { Document, model, Schema } from 'mongoose';

export interface IContactInfo extends Document {
  city: string;
  country: string;
  facebook_url: string;
  viber_url: string;
  messanger_url: string;
  telegram_url: string;
  instagram_url: string;
  email_address: string;
  phone_numbers: IPhoneNumber[] | IPhoneNumberDefault[];
  instagram_photos: IInstagramPhoto[] | IInstagramPhotoDefault[];
}

export interface IPhoneNumber {
  label: string;
  number: string;
  isShow: boolean;
  order: number;
  _id?: string;
}

export interface IInstagramPhoto {
  photo_url: string;
  insta_link: string;
  order: number;
  isShow: boolean;
  _id?: string;
}

export interface IPhoneNumberDefault {
  label: string;
  number: string;
  isShow: boolean;
  order: number;
}

export interface IInstagramPhotoDefault {
  photo_url: string;
  insta_link: string;
  order: number;
  isShow: boolean;
}

const contactInfoSchema: Schema = new Schema({
  city: {type: String},
  country: {type: String},
  facebook_url: {type: String},
  viber_url: {type: String},
  messanger_url: {type: String},
  telegram_url: {type: String},
  instagram_url: {type: String},
  email_address: {type: String},
  phone_numbers: [
    {
      label: {type: String, required: true},
      number: {type: String, required: true},
      order: {type: Number, default: 0},
      isShow: {type: Boolean, default: false},
    }
  ],
  instagram_photos: [
    {
      photo_url: {type: String, required: true},
      insta_link: {type: String, required: true},
      order: {type: Number, default: 0},
      isShow: {type: Boolean, default: false},
    }
  ]
});

export const ContactInfoSchema = model<IContactInfo>('contactInfo', contactInfoSchema);
