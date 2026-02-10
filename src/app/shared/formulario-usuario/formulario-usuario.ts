import { Component, inject, signal } from '@angular/core';
import { Usuario } from '../../models/usuario';
import { UsuarioServicio } from '../../services/usuario-servicio';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-formulario-usuario',
  imports: [FormsModule],
  templateUrl: './formulario-usuario.html',
  styleUrl: './formulario-usuario.css',
})
export class FormularioUsuario {

  private servicioUsuario = inject(UsuarioServicio);

  listaUsuarios = signal<Usuario[]>([]);

  nuevoUsuario: Usuario = {
    name: '',
    email: '',
    phone: '',
  };

  //metodo para 
  ngOnInit() {
    this.obtener();
  }

  //crear el metodo obtener usuarios
  obtener() {
    this.servicioUsuario.getUsuario().subscribe(usuarios => {
      this.listaUsuarios.set(usuarios);
    });
  }

  //guardar usuarios
  guardarUsuario(){
    this.servicioUsuario.postUsuario(this.nuevoUsuario).subscribe(usuarioId =>{
      //... spread operator: combina el nuevo usuario con la listausuarios
      this.listaUsuarios.set([usuarioId, ...this.listaUsuarios()]);
      //limpiar el form
      this.nuevoUsuario={name:'', email:'', phone:''};
    })
  }

  mensaje() {
    alert('Gracias por registrarte');
  }

}
