import { Component } from '@angular/core';

@Component({
  selector: 'app-card-acerca',
  imports: [],
  templateUrl: './card-acerca.html',
  styleUrl: './card-acerca.css',
})
export class CardAcerca {

  servicios = [
    {
      id: 1,
      nombre: "consulta general",
      descripcion: "Evaluación integral para asegurar la salud de tu mascota, incluyendo chequeos preventivos, vacunas y diagnóstico temprano.",
      imagen: "https://purina.com.ec/sites/default/files/2022-10/purina-esterilizaci%C3%B3n-de-mascotas.jpg",
      precio: 25,
      activo: true
    },
    {
      id: 2,
      nombre: "cirugia",
      descripcion: "Contamos con instalaciones modernas y personal calificado para procedimientos quirúrgicos seguros, desde esterilizaciones hasta cirugías de alta complejidad.",
      imagen: "https://veterinariadomicilio.cl/wp-content/uploads/2016/10/cirugias-animales-3.jpg",
      precio: 120,
      activo: true
    },
    {
      id: 3,
      nombre: "estetica",
      descripcion: "Sesiones de peluquería y baño especializado para que tu mejor amigo luzca increíble y mantenga una piel y pelaje saludables.",
      imagen: "https://www.cimformacion.com/blog/wp-content/uploads/2020/09/peluquera-seca-perro.jpg",
      precio: 15.50,
      activo: false
    },
  ];

}