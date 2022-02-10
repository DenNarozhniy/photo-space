import { Document, model, Schema } from 'mongoose';

export interface ISquaredCarouselItem extends Document {
  main_title: string;
  sub_title: string;
  img_alt: string;
  main_placement: string;
  isShow: boolean;
  images: ISquareImgForCarousel[] | ISquareImgForCarouselDefault[];
  second_placement: string;
}

export interface ISquareImgForCarouselDefault {
  imgUrl: string;
  isShow: boolean;
  order: number;
}

export interface ISquareImgForCarousel {
  imgUrl: string;
  isShow: boolean;
  order: number;
  _id?: string;
}

const squaredCarouselItemSchema: Schema = new Schema({
  main_title: {type: String, required: true},
  sub_title: {type: String},
  img_alt: {type: String},
  main_placement: {type: String, required: true},
  isShow: {type: Boolean, default: false},
  images: [
    {
      imgUrl: {type: String, required: true},
      isShow: {type: Boolean, default: false},
      order: {type: Number, default: 0}
    }
  ],
  second_placement: {type: String},
});

export const SquaredCarouselItemSchema = model<ISquaredCarouselItem>('squaredCarouselItem', squaredCarouselItemSchema);
