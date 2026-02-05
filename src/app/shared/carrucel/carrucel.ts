import { Component } from '@angular/core';

@Component({
  selector: 'app-carrucel',
  standalone: true,
  imports: [],
  templateUrl: './carrucel.html',
  styleUrl: './carrucel.css',
})
export class Carrucel {

  slides = [
    { id: 1, imagen: 'https://pampermut.com/blog/wp-content/uploads/2020/06/Como-hacer-que-la-visita-al-veterinario-no-sea-un-trauma-para-tu-perro.jpg' },
    { id: 2, imagen: 'https://axoncomunicacion.net/wp-content/uploads/2022/09/golden-retriever-dog-ear-examination-by-doctor-during-appointment-in-veterinary-clinic-scaled.jpg' },
    { id: 3, imagen: 'https://cdn.nubika.es/wp-content/uploads/2021/05/hospital-de-perros.jpg' },
    { id: 4, imagen: 'https://nupec.com/wp-content/uploads/2021/12/visiting-vet-2021-09-24-03-30-14-utc.jpg' },
  ];

  indice: number = 0;

  // Función para mover el carrusel
  mover(paso: number) {
    this.indice += paso;

    if (this.indice < 0) {
      this.indice = this.slides.length - 1;
    } else if (this.indice >= this.slides.length) {
      this.indice = 0;
    }
  }

  // Función para ir a una imagen 
  irAlSlide(i: number) {
    this.indice = i;
  }
}