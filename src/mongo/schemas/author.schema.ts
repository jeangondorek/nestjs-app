/* eslint-disable prettier/prettier */

import { Schema } from 'mongoose';

export const AuthorSchema = new Schema({
  name: { type: String, required: true },
  surname: { type: String, required: true },
});
