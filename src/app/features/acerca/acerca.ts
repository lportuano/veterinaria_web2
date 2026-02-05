import { Component } from '@angular/core';
import { CardAcerca } from "../../shared/card-acerca/card-acerca";
import { HeroAcerca } from "../../shared/hero-acerca/hero-acerca";
import { Clientes } from "../../shared/clientes/clientes";

@Component({
  selector: 'app-acerca',
  imports: [CardAcerca, HeroAcerca, Clientes],
  templateUrl: './acerca.html',
  styleUrl: './acerca.css',
})
export class Acerca {

}
