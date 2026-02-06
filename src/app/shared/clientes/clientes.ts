import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-clientes',
  imports: [FormsModule, CommonModule],
  templateUrl: './clientes.html',
  styleUrl: './clientes.css',
})
export class Clientes {
  pacientes = [
    {
      nombre: 'Patas',
      especie: 'Gato',
      urgencia: 'baja',
      tratamiento: 'Cirugia',
      recuperacion: 80,
      comentario:
        '¡Increíble atención! Mi gatito se sintió muy cómodo y la recuperación fue súper rápida.',
      avatar: 'https://cdn-icons-png.flaticon.com/512/616/616430.png',
    },
    {
      nombre: 'Lucky',
      especie: 'Gato',
      urgencia: 'baja',
      tratamiento: 'Consulta General',
      recuperacion: 100,
      comentario: 'El equipo es muy profesional. Lucky ya está saltando por toda la casa otra vez.',
      avatar: 'https://cdn-icons-png.flaticon.com/512/616/616563.png',
    },
    {
      nombre: 'Cookie',
      especie: 'Perro',
      urgencia: 'media',
      tratamiento: 'Cirugia',
      recuperacion: 90,
      comentario:
        'Excelente seguimiento post-operatorio. Me mantuvieron informada de todo el proceso.',
      avatar: 'https://cdn-icons-png.flaticon.com/512/616/616408.png',
    },
    {
      nombre: 'Zeus',
      especie: 'Perro',
      urgencia: 'media',
      recuperacion: 50,
      comentario: 'Va por buen camino, los doctores son muy pacientes con él.',
      avatar: 'https://cdn-icons-png.flaticon.com/512/616/616554.png',
      tratamiento: 'Fisioterapia',
    },
    {
      nombre: 'Rufo',
      especie: 'Perro',
      urgencia: 'alta',
      recuperacion: 75,
      comentario: 'Llegó muy mal pero gracias a la rapidez del equipo está estable.',
      avatar: 'https://cdn-icons-png.flaticon.com/512/616/616408.png',
      tratamiento: 'Emergencia Gástrica',
    },
    {
      nombre: 'Wilson',
      especie: 'Gato',
      urgencia: 'baja',
      recuperacion: 67,
      comentario: 'Muy buena atención, Wilson ya está comiendo con normalidad.',
      avatar: 'https://cdn-icons-png.flaticon.com/512/616/616616.png',
      tratamiento: 'Limpieza Dental',
    },
  ];
}
