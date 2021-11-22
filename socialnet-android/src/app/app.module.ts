import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { HttpClient,HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './components/login/login.component';
import { RegistroComponent } from './components/registro/registro.component';
import { ShowFotoComponent } from './components/fotos/show-foto/show-foto.component';
import { DateAgoPipe } from './pipes/date-ago.pipe';
import { NewImageComponent } from './components/fotos/new-image/new-image.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { EditProfileComponent } from './components/edit-profile/edit-profile.component';

@NgModule({
  declarations: [AppComponent,LoginComponent,RegistroComponent,ShowFotoComponent,DateAgoPipe,NewImageComponent,PerfilComponent,EditProfileComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot({backButtonText: '',backButtonIcon:'arrow-back-outline',hardwareBackButton:true}), AppRoutingModule,HttpClientModule,FormsModule,ReactiveFormsModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
