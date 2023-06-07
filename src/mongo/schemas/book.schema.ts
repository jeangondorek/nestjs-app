/* eslint-disable prettier/prettier */

import { Schema } from 'mongoose';
import { AuthorSchema } from './author.schema';

export const BookSchema = new Schema({
  title: { type: String, required: true },
  author: [ AuthorSchema ],
  language: { type: String, required: true },
  releaseyear: { type: Number, required: true },
  pages: { type: Number, required: true },
  publisher: { type: String, required: true },
});
