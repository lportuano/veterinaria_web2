import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-testimonio',
  imports: [],
  templateUrl: './testimonio.html',
  styleUrl: './testimonio.css',
})
export class Testimonio {

  @Input() titulo!: string;
  @Input() subtitulo!: string;
  @Input() descripcion!: string;
  @Input() imagen!: string;
  @Input() colorFondo!: string;
  @Input() imagen2!: string;
  @Input() imagen3!: string;
  @Input() colorTarjetas!: string;

}
