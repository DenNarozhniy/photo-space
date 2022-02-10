import { Document, model, Schema } from 'mongoose';
import { ImgResponsive } from '@photo-space/models';

export interface IPhotoService extends Document {
  main_title: string;
  sub_seo_title: string;
  name_ru: string;
  name_en: string;
  main_description: string;
  description_title: string;
  img_cover: ImgResponsive;
  price_header: string;
  isShow: boolean;
  order: number;
  fares: IFare[] | IFareDefault[];
  fare_calculator_items: {
    title: string;
    price: number;
    currency: string;
    description: string;
    hoursDuration: number;
    calculatorServices: ICalculatorService[];
  };
}

export interface IFare {
  main_title: string;
  price: number;
  currency: string;
  hoursDuration: number;
  add_info: IAddInfo[];
  order: number;
  addServices: IAddServices[];
  fareDescriptions: IFareDescription[];
  _id?: string;
}

export interface IFareDefault {
  main_title: string;
  price: number;
  currency: string;
  hoursDuration: number;
  add_info: IAddInfo[];
  order: number;
  addServices: IAddServices[];
  fareDescriptions: IFareDescription[];
}

export interface IAddInfo {
  title: string;
  text: string;
  isShow: boolean;
  order: number;
  _id?: string;
}

export interface IAddServices {
  price: number;
  title: string;
  description: string;
  selectedByDefault: boolean;
  isFroze: boolean;
  isShow: boolean;
  order: number;
  _id?: string;
}

export interface IFareDescription {
  main_description: string;
  order: number;
  add_info: string;
  _id?: string;
}

export interface ICalculatorService {
  title: string;
  additionInfo: string;
  price: number;
  count: number;
  countStep: number;
  affectToTime: boolean;
  timeStep: number;
  priceStep: number;
  isFroze: boolean;
  selectedByDefault: boolean;
  isSingleService: boolean;
  isShow: boolean;
  order: number;
  _id?: string;
}

const photoServiceSchema: Schema = new Schema({
  main_title: {type: String, required: true},
  sub_seo_title: {type: String, required: true},
  name_ru: {type: String, required: true},
  name_en: {type: String, required: true},
  description_title: {type: String, required: true},
  main_description: {type: String, required: true},
  price_header: {type: String, required: true},
  isShow: {type: Boolean, default: false},
  order: { type: Number},
  img_cover: {
    phone: {type: String},
    tablet: {type: String},
    desktop: {type: String},
  },
  fares: [
    {
      main_title: {type: String, required: true},
      price: {type: Number, required: true},
      hoursDuration: {type: Number, required: true},
      currency: {type: String, required: true},
      order: { type: Number},
      add_info: [
        {
          title: {type: String, required: true},
          order: { type: Number},
          text: {type: String, required: true},
          isShow: {type: Boolean, default: true},
        }
      ],
      addServices: [
        {
          price: {type: Number, required: true},
          order: { type: Number},
          title: {type: String, required: true},
          isShow: {type: Boolean, default: true},
          selectedByDefault: {type: Boolean, default: false},
          isFroze: { type: Boolean, default: false},
          description: {type: String, required: true},
        }
      ],
      fareDescriptions: [
        {
          main_description: {type: String, required: true},
          order: { type: Number},
          isShow: {type: Boolean, default: true},
          add_info: {type: String},
        }
      ]
    },
  ],
  fare_calculator_items: {
      title: {type: String, required: true},
      currency: {type: String, required: true},
      price: {type: Number, required: true},
      description: {type: String, required: true},
      hoursDuration: {type: Number, required: true},
      calculatorServices: [
        {
          title: {type: String, required: true},
          additionInfo: {type: String, required: true},
          price: { type: Number, required: true},
          isFroze: { type: Boolean, default: false},
          count: { type: Number, default: 1},
          countStep: { type: Number, default: 1},
          affectToTime: {type: Boolean, default: false},
          timeStep: {type: Number, default: 1},
          priceStep: { type: Number, required: true},
          selectedByDefault: { type: Boolean, default: false },
          isSingleService: {type: Boolean, default: false},
          isShow: {type: Boolean, default: true},
          order: { type: Number},
        }
      ]
    }
});

export const PhotoServiceSchema = model<IPhotoService>('photoService', photoServiceSchema);
