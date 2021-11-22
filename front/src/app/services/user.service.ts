import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { GLOBAL } from './GLOBAL';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  public url;
  public token;
  constructor(
    private _http: HttpClient
  ) {
    this.url = GLOBAL.url;
    this.token = localStorage.getItem('token');
    
   }

   mantener_sesion(token)
   {
     this.token = token;
     localStorage.setItem('token',token);
   }


   registro_usuario(data):Observable<any>
   {
      return this._http.post(this.url + 'registrar_usuario/',data)
   }

   actualizar_usuario(id,data):Observable<any>
   {  
      
      return this._http.put(this.url + 'actualizar_usuario/'+id,data);
   }


   login_user(username: string, password: string):Observable<any>
   {
      return this._http.post(this.url + 'user_login/',{ username, password })
   }


   obtener_usuario(id:any,token:any):Observable<any>
   {
      let headers = new HttpHeaders({'Content-Type': 'application/json','Authorization':token});
      return this._http.get(this.url + 'obtener_usuario/'+id,{headers:headers})
   }

   seguir_usuario(id:any,token:any):Observable<any>
   {
      let headers = new HttpHeaders({'Content-Type': 'application/json','Authorization':token});
      return this._http.post(this.url + 'seguir_usuario/',{id},{headers:headers}); 
   }

   obtener_seguidores_user(id:any,token:any):Observable<any>
   {
      let headers = new HttpHeaders({'Content-Type': 'application/json','Authorization':token});
      return this._http.get(this.url + 'obtener_seguidores/'+id,{headers:headers}); 
   }

   obtener_siguiendo_user(id:any,token:any):Observable<any>
   {
      let headers = new HttpHeaders({'Content-Type': 'application/json','Authorization':token});
      return this._http.get(this.url + 'obtener_siguiendo/'+id,{headers:headers}); 
   }

   buscar_usuarios(termino:string,token:any):Observable<any>
   {
      let headers = new HttpHeaders({'Content-Type': 'application/json','Authorization':token});
      return this._http.get(this.url + 'buscar_usuarios/'+termino,{headers:headers}); 
   }


   isauth(){
      return localStorage.getItem('token');
   }

}
