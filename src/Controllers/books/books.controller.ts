import { Body, Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { BookDto } from 'src/dto/books.dto';

@Controller('books')
export class BooksController {
  @Get()
  getAllBooks() {
    return 'All books';
  }
  @Post()
  createBook(@Body() newbook: BookDto): BookDto {
    return newbook;
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
