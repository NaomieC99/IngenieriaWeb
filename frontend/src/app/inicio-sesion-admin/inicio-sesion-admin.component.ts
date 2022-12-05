import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-inicio-sesion-admin',
  templateUrl: './inicio-sesion-admin.component.html',
  styleUrls: ['./inicio-sesion-admin.component.scss']
})
export class InicioSesionAdminComponent{
  resultado!: string;
  
  formularioLoginAdmin = new FormGroup({
    rut: new FormControl('', [Validators.required, Validators.minLength(9), Validators.maxLength(10)]),
    password: new FormControl('', [Validators.required, Validators.minLength(8)])
  });

  submit() {
    if (this.formularioLoginAdmin.valid)
      this.resultado = "Todos los datos son válidos";
    else
      this.resultado = "Hay datos inválidos en el formulario";
  }
}