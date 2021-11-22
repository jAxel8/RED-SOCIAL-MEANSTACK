import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ComentarioService } from 'src/app/services/comentario.service';
import { FotosService } from 'src/app/services/foto.service';
import Swal from 'sweetalert2';
import { io } from "socket.io-client";
import { GLOBALSOCKET } from 'src/app/services/GLOBAL';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-show-foto',
  templateUrl: './show-foto.component.html',
  styleUrls: ['./show-foto.component.scss']
})
export class ShowFotoComponent implements OnInit {

  public token;
  public FotoId;
  public comentario : any = {};
  public comentarios : Array<Object>;
  public identity;
  public socket = io(GLOBALSOCKET.url,{transports: ['websocket'], upgrade: false});
  public Liked :any;

  public foto:any = {};

  //Paginacion

  public page = 1;
  public pageSize = 10;



  constructor(
    private _activatedRoute: ActivatedRoute,
    private _fotoService : FotosService,
    private _comentarioService : ComentarioService,
    public alertController : AlertController
  ) {
    this.token = localStorage.getItem('token');
     
    this.identity = JSON.parse(localStorage.getItem('identity'));
    
    _activatedRoute.params.subscribe(
      params => {
        this.FotoId = params['id'];

        this._fotoService.show_foto(this.FotoId,this.token).subscribe(
          response => {
            this.foto = response.data;
            console.log(this.foto)
          }
        )

      }

    )


   }

  ngOnInit(): void {
    
    this.socket.on('get-comments',(data)=>{
      this.get_comentarios();
    })

    this.get_comentarios();
    
  }

  get_comentarios()
  {
    this._comentarioService.get_comentarios(this.FotoId,this.token).subscribe(
      response => {
        this.comentarios = response.data;
        console.log(this.comentarios)

      }
    )
  }
  agregar_comentario()
  {
    if(this.comentario.comentario)
    { 
      this.comentario.imagen_id = this.FotoId;

      this._comentarioService.agregar_comentario(this.comentario,this.token).subscribe(
        response => {
          this.socket.emit('comment-image')
        
          this.obtener_comentarios();

          this.comentario.comentario = '';

        },error => {
          console.log(error);
        }
      )
      
    }else{
      Swal.fire({
        icon:'warning',
        title:'Error',
        text:'Debes escribir un comentario!'
      })
    }
  }


  obtener_comentarios()
  {
    this._comentarioService.get_comentarios(this.FotoId,this.token).subscribe(
      response => {
        this.comentarios = response.data;

      }
    )
  }




 
 async eliminar_comentario(id:string){
    
  const alert = await this.alertController.create({
    header:'Confirmación',
    message:'Quieres eliminar el comentario?',
    buttons:[
      {
        text:'Si,eliminar',
        handler:() => { 
          this._comentarioService.eliminar_comentario(id,this.token).subscribe(
            response => {
              this.socket.emit('comment-image')
              this.get_comentarios();
              
            },error =>{
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
