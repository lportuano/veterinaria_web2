import { Component } from '@angular/core';
import { Hero } from "../../shared/hero/hero";
import { Servicio } from "../../shared/servicio/servicio";
import { Formulario } from "../../shared/formulario/formulario";
import { Footer } from "../../shared/footer/footer";
import { Carrucel } from "../../shared/carrucel/carrucel";
import { Pacientes } from "../../shared/pacientes/pacientes";

@Component({
  selector: 'app-home',
  imports: [Hero, Servicio, Formulario, Footer, Carrucel, Pacientes],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

}
