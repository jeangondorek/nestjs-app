import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

import 'dotenv/config';
import { ValidationPipe } from '@nestjs/common';

const port = process.env.PORT ?? 3000;
const env = process.env.NODE_ENV ?? 'development';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe());

  await app.listen(port, () => {
    console.log(
      `Server is running on port ${port} in ${env} mode > http://localhost:${port}`,
    );
  });
}
bootstrap();
