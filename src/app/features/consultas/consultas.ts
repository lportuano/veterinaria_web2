import { Component } from '@angular/core';
import { Mascota } from '../../models/mascota';
import { DetalleMascota } from "../../shared/detalle-mascota/detalle-mascota";
import { Hero } from "../../shared/hero/hero";
import { PreguntasComponent } from "../../shared/preguntas/preguntas";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-consultas',
  imports: [DetalleMascota, Hero, PreguntasComponent, RouterLink],
  templateUrl: './consultas.html',
  styleUrl: './consultas.css',
})
export class Consultas {

  mascotas = [
    { id: 1, nombre: "Patas", especie: "Gato", historial: "Vacunas al dia", foto:"https://lepardland.com/wp-content/uploads/2022/04/gatonegroeuropeo.webp" },
    { id: 2, nombre: "Lucky", especie: "Gato", historial: "Requiere desparacitacion" },
    { id: 3, nombre: "Cookie", especie: "Perro", historial: "Requiere rehabilitacion" },
  ];

  mascotasSelecionada: Mascota | null = null;

  mensajeActivo: string = "";

  verDetalles(mascota: Mascota) {
    this.mascotasSelecionada = mascota;
  }

  //recive un mensjae del omponente hijo
  //gestiona el evento enviado desde el componente hijo
  procesarAviso(mensaje: string) {
    this.mensajeActivo = mensaje;
  }

}
