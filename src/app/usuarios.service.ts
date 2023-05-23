import { Injectable } from '@angular/core';
import { Usuario } from './usuarios';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService implements InMemoryDbService {

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  private usuariosUrl = 'api/usuariosDb';  // URL to web api

  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) { }

  private log(message: string) {
    this.messageService.add(`UsuarioDelService: ${message}`);
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      this.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }

  createDb() {
    const usuarios: Usuario[] = [
      // Aquí puedes definir los datos de usuarios iniciales para tu API simulada
    ];
    return { usuariosDb: usuarios };
  }

  getUsuarios(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(this.usuariosUrl).pipe(
      tap(_ => this.log('fetched usuarios')),
      catchError(this.handleError<Usuario[]>('getUsuarios', []))
    );
  }

  addUsuarios(Usuarios: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>(this.usuariosUrl, Usuarios, this.httpOptions).pipe(
      tap((newUsuario: Usuario) => this.log(`added Usuario w/ id=${newUsuario.id}`)),
      catchError(this.handleError<Usuario>('addUsuario'))
    );
  }

  deleteUsuario(usuario: Usuario | number): Observable<Usuario> {
    const id = typeof usuario === 'number' ? usuario : usuario.id;
    const url = `${this.usuariosUrl}/${id}`;

    return this.http.delete<Usuario>(url, this.httpOptions).pipe(
      tap(_ => this.log(`deleted usuario id=${id}`)),
      catchError(this.handleError<Usuario>('deleteUsuario'))
    );
  }

  updateUsuario(usuario: Usuario): Observable<any> {
    const url = `${this.usuariosUrl}/${usuario.id}`;
    return this.http.put(url, usuario, this.httpOptions).pipe(
      tap(_ => this.log(`updated usuario id=${usuario.id}`)),
      catchError(this.handleError<any>('updateUsuario'))
    );
  }
  
}
