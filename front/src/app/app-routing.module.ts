import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlbumesComponent } from './components/albumes/albumes.component';
import { BuscarComponent } from './components/buscar/buscar.component';
import { ConfiguracionComponent } from './components/configuracion/configuracion.component';
import { FavoritosComponent } from './components/favoritos/favoritos.component';
import { IndexFotosComponent } from './components/fotos/index-fotos/index-fotos.component';
import { ShowFotoComponent } from './components/fotos/show-foto/show-foto.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { LoginComponent } from './components/login/login.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { RegistroComponent } from './components/registro/registro.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {path: 'home', component: InicioComponent,canActivate:[AuthGuard]},
  {path:'login',component:LoginComponent},
  {path:'registro',component:RegistroComponent},
  {path:'configuracion/:id',component:ConfiguracionComponent,canActivate:[AuthGuard]},
  {path:'fotos',component:IndexFotosComponent,canActivate:[AuthGuard]},
  {path:'fotos/:id',component:ShowFotoComponent,canActivate:[AuthGuard]},
  {path:'perfil/:id',component:PerfilComponent,canActivate:[AuthGuard]},
  {path:'buscar/:termino',component:BuscarComponent,canActivate:[AuthGuard]},
  {path:'favoritos',component:FavoritosComponent,canActivate:[AuthGuard]},
  {path: '**', pathMatch: 'full', redirectTo: 'home'}
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
