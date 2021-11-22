import { Component, OnInit } from '@angular/core';
import { GLOBALSOCKET } from '../services/GLOBAL';
import { io } from "socket.io-client";
import { FotosService } from '../services/foto.service';
import { AlertController } from '@ionic/angular';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-misfotos',
  templateUrl: './misfotos.page.html',
  styleUrls: ['./misfotos.page.scss'],
})
export class MisfotosPage implements OnInit {
  public fotos : Array<any> = [];
  nombre: string;
  descripcion: string;
  imagePreview: any;
  ImageFile: File;
  public filtro;
  public identity;
  public token;
  public load_response:any;
  public likes;
  public socket = io(GLOBALSOCKET.url,{transports: ['websocket'], upgrade: false});

  constructor(
    private _fotoService:FotosService,
    public alertController:AlertController
  ) {
    this.token = localStorage.getItem('token');
    this.identity = JSON.parse(localStorage.getItem('identity'));
   }

   ngOnInit(): void {
    this.socket.on('get-data',(data)=>{
      this.obtener_fotos_user();
    })

    this.socket.on('get-comments',(data)=>{
      this.obtener_fotos_user();
    })

    this.socket.on('get-images',(data)=>{
      this.obtener_fotos_user();
    })

    this.obtener_fotos_user();
  }

  obtener_fotos_user()
  {
    this._fotoService.obtener_fotos_user(this.token).subscribe(
      response =>{
        this.fotos = response.data;
        this.likes = response.user_likes;

      },
      error =>{
        console.log(error);
      }
    )
  }
  
  like_imagen(fotoid)
  {
    this._fotoService.like_foto(fotoid,this.token).subscribe(
      response => {
        this.socket.emit('like-image',{data:response.dislike});
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



  async eliminar_foto(id:any)
  { 
    
    const alert = await this.alertController.create({
      header:'Confirmación',
      message:'Estas seguro de eliminar esta imagen?',
      buttons:[
        {
          text:'Si,eliminar',
          handler:() => { 
            this._fotoService.eliminar_foto(id,this.token).subscribe(
              response  => {
                this.obtener_fotos_user();
        
        
              },
              error  => {
                console.log(error);
              }
            ) 
          
          }
          
        },
        {
          text:'No',
          handler:()=>{
            console.log('No se elimino')
          }
        }
      ]
    })
    
      await alert.present();
      
  }

}
