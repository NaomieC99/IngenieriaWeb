import { Document } from "mongoose";
export interface IPaciente extends Document{
    nombre: string;
    apellidos: string;
    rut: string;
    email: string;
    fono: number;
    contrasenya: string;
}