import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";
import { NgModule } from '@angular/core';
import { HttpClient,HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import {LocationStrategy, HashLocationStrategy} from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { LoginComponent } from './components/login/login.component';
import { RegistroComponent } from './components/registro/registro.component';
import { ConfiguracionComponent } from './components/configuracion/configuracion.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { AlbumComponent } from './components/album/album.component';
import { AlbumesComponent } from './components/albumes/albumes.component';
import { IndexFotosComponent } from './components/fotos/index-fotos/index-fotos.component';
import { ShowFotoComponent } from './components/fotos/show-foto/show-foto.component';
import { SeguidoresComponent } from './components/seguidores/seguidores.component';

import { NgbPaginationModule } from "@ng-bootstrap/ng-bootstrap";
import { PerfilComponent } from './components/perfil/perfil.component';
import { BuscarComponent } from './components/buscar/buscar.component';
import { FavoritosComponent } from './components/favoritos/favoritos.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    LoginComponent,
    RegistroComponent,
    ConfiguracionComponent,
    InicioComponent,
    AlbumComponent,
    AlbumesComponent,
    IndexFotosComponent,
    ShowFotoComponent,
    SeguidoresComponent,
    PerfilComponent,
    BuscarComponent,
    FavoritosComponent,
    
  
  ],
  imports: [
    BrowserModule,
    NgbPaginationModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
    
    
  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
