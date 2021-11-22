
import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { GLOBAL } from "./GLOBAL";
import { HttpClient,HttpHeaders } from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class AlbumService {

  public url;
  public token;
  constructor(
    private _http: HttpClient
  ) {
    this.url = GLOBAL.url;
    this.token = localStorage.getItem('token');
    
   }


   crear_album(data:any,token:any):Observable<any>
   {
    let headers = new HttpHeaders({'Content-Type': 'application/json','Authorization':token});
    return this._http.post(this.url + 'crear_album/' , data, {headers: headers})

   }

   obtener_albums(filtro:any,token:any):Observable<any>
   {
    let headers = new HttpHeaders({'Content-Type': 'application/json','Authorization':token});

    return this._http.get(this.url + 'obtener_albumes/'+filtro,{ headers: headers });

   }

   eliminar_album(id:any,token:any):Observable<any>
   {
    let headers = new HttpHeaders({'Content-Type': 'application/json','Authorization':token});

    return this._http.delete(this.url + 'eliminar_album/'+id,{ headers: headers });

   }


}
