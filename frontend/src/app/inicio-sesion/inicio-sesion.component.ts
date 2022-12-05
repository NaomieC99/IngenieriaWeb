import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-inicio-sesion',
  templateUrl: './inicio-sesion.component.html',
  styleUrls: ['./inicio-sesion.component.scss']
})
export class InicioSesionComponent {
  resultado!: string;

  formularioLogin = new FormGroup({
    rut: new FormControl('', [Validators.required, Validators.minLength(9), Validators.maxLength(10)]),
    password: new FormControl('', [Validators.required, Validators.minLength(8)])
  });

  submit() {
    if (this.formularioLogin.valid)
      this.resultado = "Todos los datos son válidos";
    else
      this.resultado = "Hay datos inválidos en el formulario";
  }
}
