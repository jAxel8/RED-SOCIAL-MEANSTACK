import { Component,OnInit } from '@angular/core';
import { element } from 'protractor';
import Swal from 'sweetalert2';
import { FotosService } from '../services/foto.service';
import { io } from "socket.io-client";
import { GLOBALSOCKET } from 'src/app/services/GLOBAL';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public token;
  public fotos : Array<any> = [];
  public fotosnuevas : Array<any> = [];
  public load_data = true;
  public likes :  Array<any> = [];
  public identity;
  public socket = io(GLOBALSOCKET.url,{transports: ['websocket'], upgrade: false});

  constructor(
    private _fotoService: FotosService
  ) {
    this.token = localStorage.getItem('token');
    this.identity = JSON.parse(localStorage.getItem('identity'));
    
    this.socket.on('get-data',(data)=>{

      this.get_fotos();
    })

    this.socket.on('get-comments',(data)=>{
      this.get_fotos();
      console.log(data);
    })
    
  }
  ngOnInit(): void {


    this.get_fotos();
    
  }


  get_fotos(){
    this._fotoService.get_fotos_home(this.token).subscribe(
      response => {
        this.fotos = response.data;
        this.likes = response.user_likes;
        this.load_data= false;
      },error =>{
        console.log(error);
      }
    )
    
      

  }

  like_imagen(fotoid)
  {
    this._fotoService.like_foto(fotoid,this.token).subscribe(
      response => {
        this.socket.emit('like-image',response);

      },error =>{
        Swal.fire({
          icon:'error',
          title:'ERROR!',
          text:error.error.message
        })
      }
    )
  }
 
  doRefresh(event) {


    setTimeout(() => {
      this.get_fotos();
      event.target.complete();
    }, 2000);
  }

  }



  



