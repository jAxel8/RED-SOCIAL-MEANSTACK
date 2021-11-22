import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { GLOBAL } from "./GLOBAL";
import { HttpClient,HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class FotosService {

  public url;
  public token;


  constructor(private _http: HttpClient) { 
    this.url = GLOBAL.url;
    this.token = localStorage.getItem('token');

  }

subir_foto(data):Observable<any>
{
  
  return this._http.post(this.url + 'subir_foto/', data);
}

obtener_fotos_user(token):Observable<any>
{
  let headers = new HttpHeaders({'Content-Type': 'application/json','Authorization':token});

  return this._http.get(this.url + "obtener_fotos_user/", {headers:headers})
}

show_foto(id:any,token:any):Observable<any>
{
  let headers = new HttpHeaders({'Content-Type': 'application/json','Authorization':token});

  return this._http.get(this.url + 'show_foto/' + id,{headers:headers});
}

eliminar_foto(id:any,token:any):Observable<any>
{
  let headers = new HttpHeaders({'Content-Type': 'application/json','Authorization':token});

  return this._http.delete(this.url + 'eliminar_foto/' + id,{headers:headers});
}


get_fotos_home(token:any):Observable<any>
{
  let headers = new HttpHeaders({'Content-Type': 'application/json','Authorization':token});

  return this._http.get(this.url + 'get_fotos/',{headers:headers});
}

get_fotos_user_id(id:any,token:any):Observable<any>
{
  let headers = new HttpHeaders({'Content-Type': 'application/json','Authorization':token});

  return this._http.get(this.url + 'get_fotos_user/'+id,{headers:headers});
}

buscar_fotos(termino:string,token:any):Observable<any>
{
  let headers = new HttpHeaders({'Content-Type': 'application/json','Authorization':token});

  return this._http.get(this.url +'buscar_fotos/' + termino,{headers:headers});
}

get_favoritos(token):Observable<any>
{
  let headers = new HttpHeaders({'Content-Type': 'application/json','Authorization':token});

  return this._http.get(this.url +'get_favoritos/',{headers:headers});
}


//LIKES

like_foto(id:string,token:any):Observable<any>
{
  let headers = new HttpHeaders({'Content-Type': 'application/json','Authorization':token});

  return this._http.post(this.url + 'like_imagen/',{id},{headers:headers});
}

get_likes(id:string,token:any):Observable<any>
{
  let headers = new HttpHeaders({'Content-Type': 'application/json','Authorization':token});

  return this._http.get(this.url + 'get_likes/'+id,{headers:headers});
}


}
