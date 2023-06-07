import { Injectable } from '@nestjs/common';
import { BookDto } from 'src/dto/books.dto';
import { BookRepository } from 'src/mongo/repository/book.repository';

@Injectable()
export class BooksService {
  constructor(private readonly bookRepository: BookRepository) {}

  async getAllBooks(): Promise<BookDto[]> {
    return await this.bookRepository.getAllBooks();
  }

  async createBook(newBook: BookDto): Promise<BookDto> {
    return await this.bookRepository.createBook(newBook);
  }
}
