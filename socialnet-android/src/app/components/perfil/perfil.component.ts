import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FotosService } from 'src/app/services/foto.service';
import { UserService } from 'src/app/services/user.service';
import { CommonModule } from '@angular/common';
import Swal from 'sweetalert2';
import { io } from "socket.io-client";
import { GLOBALSOCKET } from 'src/app/services/GLOBAL';
@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss'],
})
export class PerfilComponent implements OnInit {

  public token;
  public user : any = {};
  public userid;
  public identity;
  public likes;
  public fotos : Array<any> = [];
  public load_response:any;
  public seguidores :  Array<any> = [];
  public siguiendo :  Array<any> = [];
  public socket = io(GLOBALSOCKET.url,{transports: ['websocket'], upgrade: false});
  public following :any;

  public followyou : any;

  public url;
  public url_tab;

  constructor(
    private _activatedRoute : ActivatedRoute,
    private _userService:UserService,
    private _fotoService:FotosService,
    private router: Router
  ) {
    
    this.url = router.url;
    this.token = localStorage.getItem('token');
    this.identity = JSON.parse(localStorage.getItem('identity'));
  
    this._activatedRoute.params.subscribe(
      params =>{
        this.userid = params ['id'];

        this._userService.obtener_usuario(this.userid,this.token).subscribe(
          response => {
            this.user = response.data;
            this.obtener_seguidores();
            this.obtener_siguiendo();
          },error => {
            console.log(error);
          }
        )

      }
    )
   }

   ngOnInit(): void {
    this.socket.on('get-data',(data)=>{
      this.get_fotos_user_id();

       }) 
     
       this.socket.on('get-comments',(data)=>{
        this.get_fotos_user_id();
      })
    
    this.get_fotos_user_id();
    this.get_url_parts();
  }
 

  get_fotos_user_id()
  {
    this._fotoService.get_fotos_user_id(this.userid,this.token).subscribe(
      response => {
        this.fotos = response.data;
        this.likes = response.user_likes;
      },error => {
        console.log(error);
      }
    )

  }

  seguir_usuario(){
    this._userService.seguir_usuario(this.userid,this.token).subscribe(
      response => {


        this.obtener_seguidores();
      },error => {
        console.log(error);
      }
    )
  }


  obtener_seguidores()
  {
    this._userService.obtener_seguidores_user(this.userid,this.token).subscribe(
      response =>{
        this.seguidores = response.follows;

        var isFollowing = this.seguidores.find(x => x.user._id == this.identity._id);
        if(isFollowing){
          this.following=true;
        }else{
          this.following = false;
        }


      },error =>{
        console.log(error);
      }
    )
  }

  obtener_siguiendo(){
    this._userService.obtener_siguiendo_user(this.userid,this.token).subscribe(
      response =>{
        this.siguiendo = response.following;

        var followingyou = this.siguiendo.find(x => x.followed._id == this.identity._id);
        if(followingyou){
          this.followyou = true;
        }else{
          this.followyou = false;
        }
        

      },error =>{
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

  get_url_parts(){
    
    let parts = this.url.split('/');
    this.url_tab = parts[2];


  }

  go_to_comments(id){
    this.router.navigate(['/tabs',this.url_tab,'comentarios',id])
  }

}
