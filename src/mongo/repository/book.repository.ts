/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Book } from '../interfaces/book.interface';
import { BookDto } from 'src/dto/books.dto';

@Injectable()
export class BookRepository {
  constructor(@InjectModel('Book') private readonly bookModel: Model<Book>) {}

  async getAllBooks(): Promise<BookDto[]> {
    const books = await this.bookModel.find().exec();
    return books.map((book) => book.toObject());   
  }

  async createBook(newBook: BookDto): Promise<BookDto> {
    const book = new this.bookModel(newBook);
    const savedBook = await book.save();
    return savedBook.toObject();
  }
}
