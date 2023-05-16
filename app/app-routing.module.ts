import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { InicioUsuarioComponent } from './inicio-usuario/inicio-usuario.component';
import { PerfilUsuarioComponent } from './perfil-usuario/perfil-usuario.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: 'inicio-usuario', component: InicioUsuarioComponent },
  { path: 'perfil-usuario', component: PerfilUsuarioComponent },
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }