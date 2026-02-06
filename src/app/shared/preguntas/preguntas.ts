import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-preguntas',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './preguntas.html'
})
export class PreguntasComponent {
  @Input() titulo!: string;
  @Input() subtitulo!: string;
  @Input() colorFondo!: string;
  @Input() colorTarjetas!: string;
  @Input() preguntas!: string;
  @Input() respuestas!: string;
  @Input() preguntas2!: string;
  @Input() respuestas2!: string;

}