import { BadRequestException, Injectable } from '@nestjs/common';
import { BookDto } from 'src/dto/books.dto';
import { Book } from 'src/mongo/interfaces/book.interface';
import { BookRepository } from 'src/mongo/repository/book.repository';

@Injectable()
export class BooksService {
  constructor(private readonly bookRepository: BookRepository) {}

  async getAllBooks(): Promise<Book[]> {
    const allbooks = await this.bookRepository.getAllBooks();
    if (allbooks.length === 0) {
      throw new Error('No books found');
    }
    return allbooks;
  }

  async createBook(newBook: BookDto): Promise<Book> {
    return await this.bookRepository.createBook(newBook);
  }

  async getBookById(bookId: string): Promise<Book> {
    try {
      return await this.bookRepository.getBookById(bookId);
    } catch (error) {
      throw new Error('Book not found');
    }
  }

  async getBookByAuthorName(authorName: string): Promise<Book[]> {
    const splitAuthorName = authorName.split(' ');
    const foundedBooks = await this.bookRepository.getBookByAuthorName(
      splitAuthorName
    );
    if (!foundedBooks.length) {
      throw new BadRequestException('Book not found');
    }
    return foundedBooks;
  }

  async deleteBook(bookId: string): Promise<Book> {
    try {
      return await this.bookRepository.deleteBook(bookId);
    } catch (error) {
      throw new Error('Book not found');
    }
  }

  async updateBook(bookId: string): Promise<Book> {
    try {
      return await this.bookRepository.updateBook(bookId);
    } catch (error) {
      throw new Error('Book not found');
    }
  }
}
