import { Component } from '@angular/core';
import { CardAcerca } from "../../shared/card-acerca/card-acerca";
import { HeroAcerca } from "../../shared/hero-acerca/hero-acerca";
import { Clientes } from "../../shared/clientes/clientes";
import { Testimonio } from "../../shared/testimonio/testimonio";

@Component({
  selector: 'app-acerca',
  imports: [CardAcerca, HeroAcerca, Clientes, Testimonio],
  templateUrl: './acerca.html',
  styleUrl: './acerca.css',
})
export class Acerca {

}
