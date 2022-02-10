import { model, Schema, Document } from 'mongoose';

export interface IAdvantages extends Document {
  title: string;
  text: string;
  order: number;
  isShow: boolean;
}

const advantageSchema: Schema = new Schema({
  title: { type: String, required: true },
  text: { type: String, required: true },
  order: { type: Number},
  isShow: {type: Boolean}
});

export const AdvantageSchema = model<IAdvantages>('advantage', advantageSchema);
