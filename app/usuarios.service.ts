import { Injectable } from '@angular/core';
import { Usuario } from './usuarios';
import { ContenidoUSUARIOS } from './mock-datos';
import { Observable, of }  from 'rxjs';
import { MensajeService } from './message.service';


@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  //importar interfaz de usuarios
    getUsuarios(): Observable<Usuario[]>{
      const listaObservabledeUsuarios = of(ContenidoUSUARIOS);

      //llamada a enviar el mensaje
      this.messageService.add('Servicio de Usuarios: Usuarios  recuperados'); 
      return listaObservabledeUsuarios;
    }

  constructor(private messageService: MensajeService) { }
}
