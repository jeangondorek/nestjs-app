import { Body, Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { BookDto } from 'src/dto/books.dto';
import { BooksService } from 'src/services/books/books.service';

@Controller('books')
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  @Get()
  async getAllBooks(): Promise<BookDto[]> {
    return await this.booksService.getAllBooks();
  }
  @Post()
  async createBook(@Body() newBook: BookDto): Promise<BookDto> {
    return await this.booksService.createBook(newBook);
  }
  @Put(':id')
  updateBook() {
    return 'Update book';
  }
  @Delete(':id')
  deleteBook() {
    return 'Delete book';
  }
  @Get(':id')
  getBookById() {
    return 'Get book by id';
  }
}
