import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogingComponent } from './loging/loging.component';
import { PieDePaginaComponent } from './pie-de-pagina/pie-de-pagina.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { MessagesComponent } from './messages/messages.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';
import { NavbarComponent } from './navbar/navbar.component';
import { UsuarioDetailsComponent } from './usuario-details/usuario-details.component';



@NgModule({
  declarations: [
    AppComponent,
    LogingComponent,
    PieDePaginaComponent,
    UsuarioComponent,
    MessagesComponent,
    NavbarComponent,
    UsuarioDetailsComponent


    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  

// The HttpClientInMemoryWebApiModule module intercepts HTTP requests
// and returns simulated server responses.
//Esto lo tenemos que quitar cuando llamaemos al servidor real
//porque se pone en medio de la llamada y el servidor
HttpClientInMemoryWebApiModule.forRoot(
  InMemoryDataService, { dataEncapsulation: false }
)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
