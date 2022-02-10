import { model, Schema, Document } from 'mongoose';

export interface IAboutMe extends Document {
  title: string;
  text: string;
  subTitle: string;
  image: string;
  footerText: string;
  order: number;
  isShow: boolean;
}

const aboutMeSchema: Schema = new Schema({
  title: { type: String, required: true },
  text: { type: String, required: true },
  subTitle: { type: String },
  image: { type: String },
  footerText: { type: String },
  order: { type: Number},
  isShow: {type: Boolean}
});

export const AboutMeSchema = model<IAboutMe>('aboutMe', aboutMeSchema);
