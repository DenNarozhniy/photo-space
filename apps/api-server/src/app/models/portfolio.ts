import { Document, model, Schema } from 'mongoose';
import { ImgResponsive } from '@photo-space/models';


export interface IPortfolio extends Document {
  title: string;
  title_translit: string;
  img_cover_url: ImgResponsive;
  short_description: string;
  isShow: boolean;
  order: number;
  photos: IPortPhotos[] | IPortPhotosDefault[];
  sameAlbums: string[];
  portfolio_descriptions: PortfolioDescription[] | PortfolioDescriptionDefault[];
}

export interface IPortPhotos {
  url_1: string;
  url_2: string;
  isDouble: boolean;
  isShow: boolean;
  order: number;
  _id?: string;
}

export interface IPortPhotosDefault {
  url_1: string;
  url_2: string;
  isDouble: boolean;
  isShow: boolean;
  order: number;
}

export interface PortfolioDescriptionDefault {
  title: string;
  text: string;
  ownedByPhoto: string;
  isShow: boolean;
}

export interface PortfolioDescription {
  title: string;
  text: string;
  ownedByPhoto: string;
  isShow: boolean;
  _id?: string;
}

const portfolioSchema: Schema = new Schema({
  title: {type: String, required: true},
  title_translit: {type: String, required: true},
  img_cover_url: {
    phone: {type: String},
    tablet: {type: String},
    desktop: {type: String},
  },
  short_description: {type: String},
  isShow: {type: Boolean, default: false},
  order: {type: Number, default: 0},
  photos: [
    {
      url_1: {type: String},
      url_2: {type: String},
      isDouble: {type: Boolean, default: false},
      isShow: {type: Boolean, default: false},
      order: {type: Number, default: 0},
    }
  ],
  sameAlbums: [String],
  portfolio_descriptions: [
    {
      title: {type: String, required: true},
      text: {type: String, required: true},
      ownedByPhoto: {type: String, required: true},
      isShow: {type: Boolean, default: false},
    }
  ]
});

export const PortfolioSchema = model<IPortfolio>('portfolio', portfolioSchema);
