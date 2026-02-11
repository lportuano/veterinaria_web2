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

  editando = false;

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

  mensaje() {
    alert('Gracias por registrarte');
  }

  //metodo GUARDAR
  guardarUsuario() {
    if (this.editando && this.nuevoUsuario.id) {
      this.servicioUsuario.putUsuario(this.nuevoUsuario.id, this.nuevoUsuario).
        subscribe(() => {
          this.obtener();
          this.resetear();
        });
    }
    else {
      this.servicioUsuario.postUsuario(this.nuevoUsuario).subscribe(() => {
        this.obtener();
        this.resetear();
      })
    }
  }

  //metodo ELIMINAR
  eliminarsuario(id: number) {
    if (confirm('¿Desea eliminar el registro ?')) {
      this.servicioUsuario.deleteUsuario(id).subscribe(() => {
        this.obtener();
      })
    }
  }

  //metodo para poner los datos en el formulario para poder editar los inputs
  seleccionarParaEditar(user: Usuario) {
    this.editando = true;
    this.nuevoUsuario = { ...user };
  }

  //metodo para limpiar los inputs (formulario)
  resetear() {
    this.editando = false;
    this.nuevoUsuario = { name: '', email: '', phone: '' }
  }

  /*guardar usuarios
  guardarUsuario() {
    this.servicioUsuario.postUsuario(this.nuevoUsuario).subscribe(usuarioId => {
      //... spread operator: combina el nuevo usuario con la listausuarios
      this.listaUsuarios.set([usuarioId, ...this.listaUsuarios()]);
      //limpiar el form
      this.nuevoUsuario = { name: '', email: '', phone: '' };
    })
  }*/

}
