/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Book } from '../interfaces/book.interface';
import { BookDto } from 'src/dto/books.dto';

@Injectable()
export class BookRepository {
  constructor(@InjectModel('Book') private readonly bookModel: Model<Book>) {}

  async getAllBooks(): Promise<Book[]> {
    return await this.bookModel.find({}, { __v : false }).sort({ name: +1 }).exec();
  }

  async createBook(newBook: BookDto): Promise<Book> {
    const savedBook = new this.bookModel(newBook);
    return await savedBook.save();
  }

  async getBookById(bookId: string): Promise<Book> {
    return await this.bookModel.findById(bookId, { __v : false }).exec();  
  }
}
