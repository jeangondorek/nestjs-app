import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { BookDto } from 'src/dto/books.dto';
import { Book } from 'src/mongo/interfaces/book.interface';
import { BooksService } from 'src/services/books/books.service';

@Controller('books')
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  @Get()
  async getAllBooks(): Promise<Book[]> {
    return await this.booksService.getAllBooks();
  }
  @Post()
  async createBook(@Body() newBook: BookDto): Promise<Book> {
    return await this.booksService.createBook(newBook);
  }
  @Put(':bookId')
  async updateBook(@Param('bookId') bookId: string): Promise<Book> {
    return await this.booksService.updateBook(bookId);
  }
  @Delete(':bookId')
  async deleteBook(@Param('bookId') bookId: string): Promise<Book> {
    return await this.booksService.deleteBook(bookId);
  }
  @Get(':bookId')
  async getBookById(@Param('bookId') bookId: string): Promise<Book> {
    return await this.booksService.getBookById(bookId);
  }
}
