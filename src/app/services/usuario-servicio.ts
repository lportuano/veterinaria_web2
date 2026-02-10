import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../models/usuario';

@Injectable({
  providedIn: 'root',
})
export class UsuarioServicio {

  private http = inject(HttpClient);

  private API_URL = 'https://jsonplaceholder.typicode.com/users'

  getUsuario(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(this.API_URL)
  }

  //metodo Post
  postUsuario(usuario: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>(this.API_URL, usuario);
  }

}
