import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FotosService } from '../services/foto.service';
import { GLOBALSOCKET } from '../services/GLOBAL';
import { UserService } from '../services/user.service';
import { io } from "socket.io-client";
import Swal from 'sweetalert2';
@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.page.html',
  styleUrls: ['./buscar.page.scss'],
})
export class BuscarPage implements OnInit {

  public load_data = true;
  public token;
  public termino;
  public fotos : Array<any> = [];
  public usuarios : Array<any> = [];
  public selected = '1';
  public likes;
  public socket = io(GLOBALSOCKET.url,{transports: ['websocket'], upgrade: false});

  constructor(
    private _userService : UserService,
    private _activatedRoute : ActivatedRoute,
    private _fotoService : FotosService
  ) { 
    this.token = localStorage.getItem('token');
  }

  ngOnInit() {
  }

  buscar()
  {
   
      this._userService.buscar_usuarios(this.termino,this.token).subscribe(
        response => {
         
          this.load_data = false;
          this.usuarios = response;
          console.log(this.usuarios)
        },error =>{
          console.log(error);
        }
      )


    this._fotoService.buscar_fotos(this.termino,this.token).subscribe(
      response => {
        this.fotos = response.data;
        this.likes = response.user_likes;
        console.log(this.fotos);
        this.load_data = false;
      },error => {
        console.log(error);
      }
    )

  }

  like_imagen(fotoid)
  {
    this._fotoService.like_foto(fotoid,this.token).subscribe(
      response => {

        var search = this.likes.indexOf(fotoid);

        if(search != -1){
          this.likes.splice(search,1);
          
        }else{
          this.likes.push(fotoid);
        }

      },error =>{
        Swal.fire({
          icon:'error',
          title:'ERROR!',
          text:error.error.message
        })
      }
    )
  }
 


  segmentChanged(event: CustomEvent) {
    this.selected = event.detail.value;


  }



}
