import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { GLOBAL } from "./GLOBAL";
import { HttpClient,HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ComentarioService {

  public url;
  public  token;


  constructor(private _http: HttpClient) {
    this.url = GLOBAL.url;
    this.token = localStorage.getItem('token');
   }


   agregar_comentario(data:any,token:any):Observable<any>
   {
    let headers = new HttpHeaders({'Content-Type': 'application/json','Authorization':token});

    return this._http.post( this.url + 'agregar_comentario/',data,{headers:headers});
   }

   get_comentarios(id:string,token:any):Observable<any>
   
   {
    let headers = new HttpHeaders({'Content-Type': 'application/json','Authorization':token});

    return this._http.get(this.url + 'get_comentarios/' + id, {headers:headers})
   }

   eliminar_comentario(id:string,token:any):Observable<any>
   
   {
    let headers = new HttpHeaders({'Content-Type': 'application/json','Authorization':token});

    return this._http.delete(this.url + 'delete_comment/' + id, {headers:headers})
   }

}
