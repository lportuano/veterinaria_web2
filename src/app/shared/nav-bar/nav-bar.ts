import { Component, inject } from '@angular/core';
import { Router, RouterLink } from "@angular/router";
import { OutService } from '../../services/out-service';

@Component({
  selector: 'app-nav-bar',
  imports: [RouterLink],
  templateUrl: './nav-bar.html',
  styleUrl: './nav-bar.css',
})
export class NavBar {

  public servicioAuth = inject(OutService)
  private router = inject(Router);

  cerrarSesion() {
    localStorage.removeItem('token'); 
    this.router.navigate(['/login']);
  }

}
