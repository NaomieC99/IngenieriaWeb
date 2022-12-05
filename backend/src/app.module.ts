import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PacientesModule } from './pacientes/pacientes.module';
import { MongoModule } from './config/mongo.module';

@Module({
  imports: [PacientesModule, MongoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
