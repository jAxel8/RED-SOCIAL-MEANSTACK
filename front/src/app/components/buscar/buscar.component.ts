import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FotosService } from 'src/app/services/fotos.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent implements OnInit {
  public load_data = true;
  public token;
  public termino;
  public fotos : Array<any> = [];
  public usuarios : Array<any> = [];
  constructor(
    private _userService : UserService,
    private _activatedRoute : ActivatedRoute,
    private _fotoService : FotosService
  ) { 
    this.token = localStorage.getItem('token');

    _activatedRoute.params.subscribe(
      params => {
        this.termino = params ['termino'];
        _userService.buscar_usuarios(this.termino,this.token).subscribe(
          response => {
            this.usuarios = response;
            this.load_data = false;

            

            


          },error =>{
            console.log(error);
          }
        )

        _fotoService.buscar_fotos(this.termino,this.token).subscribe(
          response => {
            this.fotos = response.data;
            this.load_data = false;
          },error => {
            console.log(error);
          }
        )
          

      }
    )

  }

  ngOnInit(): void {


  }

}
