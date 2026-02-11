import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../models/usuario';

@Injectable({
  providedIn: 'root',
})
export class UsuarioServicio {

  private http = inject(HttpClient);

  private API_URL = 'https://698c756321a248a27361a22d.mockapi.io/usuarios'

  //metodo GET
  getUsuario(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(this.API_URL)
  }

  //metodo POST
  postUsuario(usuario: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>(this.API_URL, usuario);
  }

  //metodo buscar por ID
  getUsuarioById(id: number): Observable<Usuario> {
    return this.http.get<Usuario>(`${this.API_URL}/${id}`);
  }

  //metodo PUT
  putUsuario(id: number, usuario: Usuario): Observable<Usuario>{
    return this.http.put<Usuario>(`${this.API_URL}/${id}`,usuario);
  }

  //metodo DELETE
  deleteUsuario(id:number):Observable<void>{
    return this.http.delete<void>(`${this.API_URL}/${id}`);
  }

}
