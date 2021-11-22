import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ComentarioService } from 'src/app/services/comentario.service';
import { FotosService } from 'src/app/services/fotos.service';
import Swal from 'sweetalert2';
import { io } from 'socket.io-client';
import { GLOBALSOCKET } from 'src/app/services/GLOBAL';
@Component({
  selector: 'app-show-foto',
  templateUrl: './show-foto.component.html',
  styleUrls: ['./show-foto.component.css']
})
export class ShowFotoComponent implements OnInit {

  public token;
  public FotoId;
  public foto : any = {};
  public comentario : any = {};
  public comentarios : Array<Object>;
  public identity;

  public Liked :any;

  //Paginacion

  public page = 1;
  public pageSize = 10;
  public socket = io(GLOBALSOCKET.url,{transports: ['websocket'], upgrade: false});


  constructor(
    private _activatedRoute: ActivatedRoute,
    private _fotoService : FotosService,
    private _comentarioService : ComentarioService
  ) {
    this.token = localStorage.getItem('token');
     
    this.identity = JSON.parse(localStorage.getItem('identity'));
    
    _activatedRoute.params.subscribe(
      params => {
        this.FotoId = params['id'];

        this._fotoService.show_foto(this.FotoId,this.token).subscribe(
          response  =>{
            this.foto = response.data;


          },
          error  => {
            console.log(error);
          }
        )

      }

    )


    this.socket.on('get-data',(data)=>{
      this._fotoService.get_likes(this.FotoId,this.token).subscribe(
        response => {
  
          if(response.data.length > 0){this.Liked = true}else{this.Liked = false}
  
        },error =>{console.log(error);}
      )
      this._fotoService.show_foto(this.FotoId,this.token).subscribe(
        response  =>{
          this.foto = response.data;


        },
        error  => {
          console.log(error);
        }
      )
    })

   }

  ngOnInit(): void {
    this.socket.on('get-comments',(data)=>{
      this.get_comentarios();
      this._fotoService.show_foto(this.FotoId,this.token).subscribe(
        response  =>{
          this.foto = response.data;


        },
        error  => {
          console.log(error);
        }
      )
    })
    this.get_comentarios();
    this._fotoService.get_likes(this.FotoId,this.token).subscribe(
      response => {

        if(response.data.length > 0){this.Liked = true}else{this.Liked = false}

      },error =>{console.log(error);}
    )

    

  }

  get_comentarios()
  {
    this._comentarioService.get_comentarios(this.FotoId,this.token).subscribe(
      response => {
        this.comentarios = response.data;

      }
    )
  }
  agregar_comentario(comentarioForm:any)
  {
    if(comentarioForm.valid)
    { 
      this.comentario.imagen_id = this.FotoId;

      this._comentarioService.agregar_comentario(this.comentario,this.token).subscribe(
        response => {
          this.socket.emit('comment-image')
          Swal.fire({
            icon:'success',

            text:'El comentario ha sido agregado'
        
          })
         
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

  cancelar_comentario()
  {
    this.comentario.comentario ='';
  }


  like_imagen()
  {
    this._fotoService.like_foto(this.FotoId,this.token).subscribe(
      response => {

        this.foto = response.data;
        if(response.like == undefined){
          this.Liked = !this.Liked;
        }else{
          this.Liked = true;
        }

        this.socket.emit('like-image')

      },error =>{
        Swal.fire({
          icon:'error',
          title:'ERROR!',
          text:error.error.message
        })
      }
    )
  }
 
  eliminar_comentario(id:string){
    Swal.fire({
      title:'Quieres eliminar este comentario?',
      showDenyButton:true,
      showConfirmButton:true,
      denyButtonText:'No',
      confirmButtonText:'Eliminar',
    }).then((result) => {
      if(result.isConfirmed){
        this._comentarioService.eliminar_comentario(id,this.token).subscribe(
        response => {
          this.socket.emit('comment-image')
          this.get_comentarios();
        },error =>{
          console.log(error);
        }
      )}else if(result.isDenied){
        Swal.close();
      }
    })

}



}
