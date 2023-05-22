import { Component } from '@angular/core';
import { Curso } from '../cursos';
import {ContenidoUSUARIOS } from '../mock-datos';
import { UsuariosService } from '../usuarios.service';


@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent {

  //listaUsuarios = ContenidoUsuarios;
  //esta era la declaración anterior antes de suscribirnos
  ListaUsuarios : any =[];
  
  getUsuarios(): void {
    //this.listaUsuarios = this.UsuariosDelService.getUsuarios();
    //lo de arriba es de antes de susbrirnos
    this.UsuarioDelService.getUsuarios()
      .subscribe(this.ListaUsuarios => this.ListaUsuarios = this.ListaUsuarios);
  }

ngOnInit(): void {
  this.getUsuarios();
}

constructor(private UsuariosDelService: UsuarioService) {};
}

