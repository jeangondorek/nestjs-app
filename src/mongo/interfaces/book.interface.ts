/* eslint-disable prettier/prettier */
import { Document } from 'mongoose';
import * as mongoose from 'mongoose';

export interface Book extends Document {

  readonly _id: mongoose.Schema.Types.ObjectId,
  readonly title: string,
  readonly author: object,
  readonly language: string,
  readonly releaseyear: number,
  readonly pages: number,
  readonly publisher: string,
}
