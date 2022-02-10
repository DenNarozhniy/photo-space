import { Schema, model, Document, Model } from 'mongoose';
const uniqueValidator = require('mongoose-unique-validator');

export interface IUser extends Document {
  name: string;
  email: string;
  password: string;
}

const userSchema: Schema = new Schema({
  email: { type: String, required: true, unique: true },
  name: { type: String, required: true},
  password: {type: String, required: true}
}, {collection: 'users'});

userSchema.plugin(uniqueValidator, {message: 'Email already in use'});
export const UserSchema = model<IUser>('user', userSchema);
