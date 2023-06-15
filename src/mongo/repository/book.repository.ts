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

  async deleteBook(bookId: string): Promise<Book> {
    return await this.bookModel.findByIdAndDelete(bookId, { __v : false }).exec();
  }

  async updateBook(bookId: string, updateBook: BookDto): Promise<Book> {
    const { title, author, language, releaseyear, pages, publisher } = updateBook;
  
    const updatedBookData: Partial<Book> = {};
    if (title) updatedBookData.title = title;
    if (author) updatedBookData.author = author;
    if (language) updatedBookData.language = language;
    if (releaseyear) updatedBookData.releaseyear = releaseyear;
    if (pages) updatedBookData.pages = pages;
    if (publisher) updatedBookData.publisher = publisher;
  
    const updatedBook = await this.bookModel
      .findByIdAndUpdate(bookId, updatedBookData, { new: true })
      .exec();
  
    if (!updatedBook) {
      throw new Error('Book not found');
    }
  
    return updatedBook;
  }

  async getBookByAuthorName(authorName: string[]): Promise<Book[]> {
    return await this.bookModel.find(
      { 
        $or: [
          { "author.name": {$in: authorName } },
          { "author.surname": {$in: authorName} }
        ]
      });
  }

  async getBookByBookTitle(bookTitle: string): Promise<Book[]> {
    return await this.bookModel.find(
      { title: { $regex: bookTitle, $options: 'i' } }, { __v : false}
    );
  }
}
