import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PacientesModule } from './pacientes/pacientes.module';
import { MongoModule } from './config/mongo.module';
import { BooksModule } from './books/books.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [PacientesModule, MongoModule, BooksModule, UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
