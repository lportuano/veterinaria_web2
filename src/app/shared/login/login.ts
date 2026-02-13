import { Component, inject } from '@angular/core';
import { OutService } from '../../services/out-service';
import { FormsModule } from "@angular/forms";

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {

  email:string='';
  password:string='';

  private servicioAuth = inject(OutService);

  iniciarSesion(){
    this.servicioAuth.login(this.email, this.password);
    alert('Bienvenido al sistema');
  }

  cerrarSesion(){
    this.servicioAuth.logout;
    alert('Sesion cerrada');
  }

}
