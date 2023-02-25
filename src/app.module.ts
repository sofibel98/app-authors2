import { Module } from '@nestjs/common';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { AuthorsModule } from './authors/authors.module';
import * as dotenv from 'dotenv';
dotenv.config();

const configString = `{
  "type": "`+process.env.DB_TYPE+`" ,
  "host": "`+process.env.DB_HOST+`",
  "port": "`+process.env.DB_PORT+`",
  "username": "`+process.env.DB_USERNAME+`",
  "password": "`+process.env.DB_PASSWORD+`",
  "database": "`+process.env.DB_DATABASE+`",
  "autoLoadEntities":"true",
  "synchronize": true
}`;

const configObject = JSON.parse(configString) as TypeOrmModuleOptions;


@Module({
  imports: [
    TypeOrmModule.forRoot(configObject),
    AuthorsModule,
  ],

})
export class AppModule {}
