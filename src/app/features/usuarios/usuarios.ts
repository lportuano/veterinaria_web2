import { Component } from '@angular/core';
import { Hero } from "../../shared/hero/hero";
import { FormularioUsuario } from "../../shared/formulario-usuario/formulario-usuario";

@Component({
  selector: 'app-usuarios',
  imports: [Hero, FormularioUsuario],
  templateUrl: './usuarios.html',
  styleUrl: './usuarios.css',
})
export class Usuarios {

}
