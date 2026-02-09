import { Component, inject, signal } from '@angular/core';
import { MascotaService } from '../../services/mascota-service';
import { Mascota } from '../../models/mascota';
import { Pet } from '../../models/pet';

@Component({
  selector: 'app-mascotas',
  imports: [],
  templateUrl: './mascotas.html',
  styleUrl: './mascotas.css',
})
export class Mascotas {

  private mascotaServicio = inject(MascotaService);

  mascotas = signal<Pet[]>([]);

  ngOnInit() {
    this.mascotaServicio.getMascotas().subscribe(datos => {
      this.mascotas.set(datos.data);
    });
  }

  mensaje() {
    alert('❤️Gracias por elegirme❤️');
  }
}

