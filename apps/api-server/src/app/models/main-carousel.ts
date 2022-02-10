import { model, Schema, Document } from 'mongoose';

export interface IMainCarousel extends Document {
  smImgUrl: string;
  mdImgUrl: string;
  lgImgUrl: string;
  text: string;
  order: number;
  redirectionLink: string;
  isShow: boolean;
}

const mainCarouselSchema: Schema = new Schema({
  smImgUrl: {type: String, required: true},
  mdImgUrl: {type: String, required: true},
  lgImgUrl: {type: String, required: true},
  text: {type: String},
  order: {type: Number},
  redirectionLink: {type: String},
  isShow: {type: Boolean}
});

export const MainCarouselSchema = model<IMainCarousel>('mainCarousel', mainCarouselSchema);
