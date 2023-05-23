import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../usuarios.service';
import { Usuario } from '../usuarios';
import { MessageService } from '../message.service'; // Importar MessageService


@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css'],
  providers: [MessageService] // Incluir MessageService en los providers
})
export class UsuarioComponent implements OnInit {
  listaUsuarios: Usuario[] = [];
  listaUsuariosOriginal: Usuario[] = [];
  Usuario: any;

  constructor(private usuariosService: UsuariosService, private messageService: MessageService) {}

  ngOnInit(): void {
    this.getUsuarios();
  }

  getUsuarios(): void {
    this.usuariosService.getUsuarios()
      .subscribe(listaUsuarios => {
        this.listaUsuarios = listaUsuarios.map(usuario => ({
          ...usuario,
          editable: false // Establecer editable en false para cada usuario
        }));
        this.listaUsuariosOriginal = [...this.listaUsuarios];
      });
  }

  delete(usuario: Usuario): void {
    this.listaUsuarios = this.listaUsuarios.filter(u => u !== usuario);
    this.listaUsuariosOriginal = this.listaUsuariosOriginal.filter(u => u !== usuario); // Elimina el usuario de la lista original
    this.usuariosService.deleteUsuario(usuario).subscribe();
  }
  

  nEditChange(value: any, index: number, field: string): void {
    Object.defineProperty(this.listaUsuarios[index], field, { value: value, writable: true });
  }

  toggleEdit(usuario: Usuario): void {
    usuario.editable = !usuario.editable;
  }

  addUsuarios(nom: string, dni: string, apellidos: string, usuario: string, contraseña: string): void {
    nom = nom.trim();
    dni = dni.trim();
    apellidos = apellidos.trim();
    usuario = usuario.trim();
    contraseña = contraseña.trim();

    if (!nom || !dni || !apellidos || !usuario || !contraseña) {
      return;
    }

    const nuevoUsuario: Usuario = {
      id: 0, // Asigna un valor adecuado al ID
      nom: nom,
      dni: dni,
      ap: apellidos,
      us: usuario,
      pas: contraseña,
      f: '', // Proporciona un valor para la propiedad f
      dir: '', // Proporciona un valor para la propiedad dir
      tel: 0, // Proporciona un valor para la propiedad tel
      t_us: '', // Proporciona un valor para la propiedad t_us
      ac: false, // Proporciona un valor para la propiedad ac
      editable: false // Establece editable en false para el nuevo usuario
    };

    this.usuariosService.addUsuarios(nuevoUsuario)
      .subscribe(usuario => {
        this.listaUsuarios.push(usuario);
        this.listaUsuariosOriginal.push(usuario);
      });
  }

  updateUsuario(usuario: Usuario): void {
    this.usuariosService.updateUsuario(usuario)
      .subscribe(() => {
        this.toggleEdit(usuario); // Vuelve al modo de visualización después de guardar
        this.messageService.add('Usuario actualizado correctamente.');
      });
  }
  

  guardarCambios(): void {
    const usuariosModificados = this.listaUsuarios.filter((usuario, index) => {
      return !this.sonIguales(usuario, this.listaUsuariosOriginal[index]);
    });

    usuariosModificados.forEach((usuario) => {
      this.usuariosService.updateUsuario(usuario).subscribe();
    });

    this.listaUsuariosOriginal = [...this.listaUsuarios];
  }

  sonIguales(usuario1: Usuario, usuario2: Usuario): boolean {
    // Implementa la lógica para verificar si dos usuarios son iguales
    // Puedes comparar los campos relevantes, como el nombre, apellidos, DNI, etc.
    // Devuelve true si son iguales, false en caso contrario
    return usuario1.nom === usuario2.nom &&
           usuario1.dni === usuario2.dni &&
           usuario1.ap === usuario2.ap &&
           usuario1.us === usuario2.us &&
           usuario1.pas === usuario2.pas;
  }
}
