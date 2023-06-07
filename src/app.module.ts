import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BooksController } from './Controllers/books/books.controller';
import { BooksService } from './services/books/books.service';
import { BookRepository } from './mongo/repository/book.repository';
import { BookSchema } from './mongo/schemas/book.schema';

import 'dotenv/config';

const urlMongo =
  process.env.MONGO_URL ?? 'mongodb://localhost:27017/nestjs-app';

@Module({
  imports: [
    MongooseModule.forRoot(urlMongo, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }),

    MongooseModule.forFeature([
      {
        name: 'Book',
        schema: BookSchema,
      },
    ]),
  ],
  controllers: [BooksController],
  providers: [BooksService, BookRepository],
})
export class AppModule {}
