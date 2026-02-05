import { Component } from '@angular/core';

@Component({
  selector: 'app-servicio',
  imports: [],
  templateUrl: './servicio.html',
  styleUrl: './servicio.css',
})
export class Servicio {

  subtitulo: string = "Cuidamos a los que mas quieres con servicio de calidad";

  servicioSeleccionado: string = "ninguno";

  servicios = [

    {
      id: 1,
      nombre: "consulta general",
      dscripcion: "Evaluacion completa de tu mascota",
      imagen: "https://purina.com.ec/sites/default/files/2022-10/purina-esterilizaci%C3%B3n-de-mascotas.jpg",
      activo: true
    },

    {
      id: 2,
      nombre: "cirugia",
      dscripcion: "el cuidado de tu mascota es muy importante para mantenerlo feliz",
      imagen: "https://veterinariadomicilio.cl/wp-content/uploads/2016/10/cirugias-animales-3.jpg",
      activo: true
    },

    {
      id: 3,
      nombre: "estetica",
      dscripcion: "el cuidado de la imagen de tu mascota es primordial",
      imagen: "https://www.cimformacion.com/blog/wp-content/uploads/2020/09/peluquera-seca-perro.jpg",
      activo: false
    },

  ];

  serviciosFiltrados = this.servicios

  //funcion para mostrar el mensaje Has mostrado interés en:
  seleccionar(nombre: string) {
    this.servicioSeleccionado = nombre;
  }

  //funcion para buscar servicios
  busqueda(event: Event) {
    const valor = (event.target as HTMLInputElement).value;

    this.subtitulo = `Resultados para: $(valor)`;

    this.serviciosFiltrados = this.servicios.filter(s =>
      s.nombre.toLocaleLowerCase().includes(valor.toLocaleLowerCase())
    )

  }

}
