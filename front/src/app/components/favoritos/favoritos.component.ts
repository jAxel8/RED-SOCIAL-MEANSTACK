import { Component, OnInit } from '@angular/core';
import { FotosService } from 'src/app/services/fotos.service';

@Component({
  selector: 'app-favoritos',
  templateUrl: './favoritos.component.html',
  styleUrls: ['./favoritos.component.css']
})
export class FavoritosComponent implements OnInit {

  public token;
  public fotosfav : Array<any> = [];
  constructor(
    private _fotoService : FotosService
  ) {
    this.token = localStorage.getItem('token');
   }

  ngOnInit(): void {

    this.obtener_favoritos();

  }

  obtener_favoritos(){
    this._fotoService.get_favoritos(this.token).subscribe(
      response =>{
        console.log(response);
      },error =>{
        console.log(error);
      }
    )
  }

}
