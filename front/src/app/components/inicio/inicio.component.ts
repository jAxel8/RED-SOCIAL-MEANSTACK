import { Component, OnInit } from '@angular/core';
import { FotosService } from 'src/app/services/fotos.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  public token;
  public fotos : Array<any> = [];
  public fotosnuevas : Array<any> = [];
  public load_data = true;
  constructor(
    private _fotoService : FotosService
  ) {
    this.token = localStorage.getItem('token');
   }

  ngOnInit(): void {

    this.get_fotos();
  }


  get_fotos(){
    this._fotoService.get_fotos_home(this.token).subscribe(
      response => {
        this.fotos = response.data;
        this.fotosnuevas = response.random;
        this.load_data= false;
        
      },error =>{
        console.log(error);
      }
    )
  }


}
