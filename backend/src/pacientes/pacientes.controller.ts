import { Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CreatePacientesDto } from './dtos/create-pacientes.dto';
import { UpdatePacientesDto } from './dtos/update-pacientes.dto';

@Controller('pacientes')
export class PacientesController {
//metodos para datos pacientes

    //metodo ver pacientes
    @Get()
    async getPacientes(){
        return 'datos de todos los pacientes';
    }

    @Get(':rut')
    async getPaciente(@Param('rut') rut:string){
        return `conseguir paciente por rut ${ rut }`;
    }

    @Post()
    async createPacientes(pacienteDto: CreatePacientesDto){
        return pacienteDto;
    }

    @Put(':rut')
    async updatePacientes(@Param('rut') rut: string, pacienteDto: UpdatePacientesDto){
        return pacienteDto;
    }

    @Delete(':rut')
    async deletePaciente(@Param('rut') rut: string){
        return rut;
    }


}
