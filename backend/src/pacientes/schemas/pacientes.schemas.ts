import { Schema } from "mongoose";

export const PacientesSchema = new Schema({
    nombre: { type: String, requeride: true},
    apellidos: { type: String, requeride: true},
    rut: { type: String, requeride: true},
    email: { type: String, requeride: true},
    fono: { type: Number, requeride: true},
    contresena: { type: String, requeride: true}

})