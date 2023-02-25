import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv';
dotenv.config();

const port = process.env.APP_PORT;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('authors');
  app.enableCors(
    {
      origin: '*',
    }
  )
  await app.listen(port);
}
bootstrap();
