import { Module } from '@nestjs/common';
import { PacientesService } from './pacientes.service';
import { PacientesController } from './pacientes.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { PacientesSchema } from './schemas/pacientes.schemas';

@Module({

  imports:[
    MongooseModule.forFeature([
      {
        name: 'pacientes', //nombre tabla
        schema: PacientesSchema
      }


    ])
  ],
  providers: [PacientesService],
  controllers: [PacientesController]
})
export class PacientesModule {}
