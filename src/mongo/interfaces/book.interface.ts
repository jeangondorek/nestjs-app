/* eslint-disable prettier/prettier */
import { Document } from 'mongoose';
import * as mongoose from 'mongoose';

export interface Book extends Document {

  _id: mongoose.Schema.Types.ObjectId,
  title: string,
  author: object,
  language: string,
  releaseyear: number,
  pages: number,
  publisher: string,
}
