import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { AbstractControl, FormBuilder, ReactiveFormsModule, ValidationErrors, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario-cuenta',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './formulario-cuenta.html',
  styleUrl: './formulario-cuenta.css',
})
export class FormularioCuenta {

  private fb = inject(FormBuilder);

  reglaEmail = '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$';
  //reglaPassword = '^(?=.*[A-Za-z])(?=.*\\d)[A-Za-z\\d]{8,}$';

  formCuenta = this.fb.group(
    {
      email: ['', [Validators.required, Validators.pattern(this.reglaEmail)]],
      comentario: ['', [Validators.required]],
    },
    //{ validators: this.validarClaves }
  );

  // //metodo para la validacion
  // validarClaves(control: AbstractControl): ValidationErrors | null {
  //   const clave1 = control.get('password')?.value;
  //   const clave2 = control.get('repeatPassword')?.value;

  //   return clave1 === clave2 ? null : { noCoinciden: true }
  // }

  //metodo para mostrar los errores personalizados
  mostrarError(campo: string, tipoError: string): boolean {
    const input = this.formCuenta.get(campo);

    if (input && input.invalid && input.touched) {
      return input.hasError(tipoError)
    }
    return false;
  }

  mostrarDatos() {
    if (this.formCuenta.valid) {
      //URLSearchParams -> crea un objeto especial que formatea los datos del formulario como una URL (email%)
      const contenido = new URLSearchParams();
      contenido.set('form-name', 'contacto');
      contenido.set('bot-field', '');
      contenido.set('email', this.formCuenta.value.email ?? '');
      contenido.set('comentario', this.formCuenta.value.comentario ?? '');

      //Promesas: funcion especial de JS que se usa para hacer peticiones HTTP a traves de la red
      fetch('/', {
        method: 'POST',
        //Indicar que los datos que se van a enviar estan codificados como una URL no como un JSON
        headers: { 'Content-Type': "application/x-www-form-urlencoded" },
        //convertir todo el objeto a una cadena de texto lista para enviarse
        body: contenido.toString()
      })
        //si la promesa se cumple
        .then(() => {
          alert('Enviado con exito');
          this.formCuenta.reset();
        })
        //si la promesa no se cunple
        .catch((error) =>
          console.log('No se pueden enviar lo datos', error));
    }
  }
}

