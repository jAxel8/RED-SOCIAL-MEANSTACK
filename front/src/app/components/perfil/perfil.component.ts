import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FotosService } from 'src/app/services/fotos.service';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  public token;
  public user : any = {};
  public userid;
  public identity;

  public fotos : Array<any> = [];
  public load_response:any;
  public seguidores :  Array<any> = [];
  public siguiendo :  Array<any> = [];

  public following :any;

  public followyou : any;

  constructor(
    private _activatedRoute : ActivatedRoute,
    private _userService : UserService,
    private _fotoService : FotosService
  ) {
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
              this._fotoService.get_fotos_user_id(this.user._id,this.token).subscribe(
                response => {
                  this.fotos = response.data;

                },error => {
                  console.log(error);
                }
              )

            },error => {
              console.log(error);
            }
          )

        }
      )


   }

  ngOnInit(): void {
    
    
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

  eliminar_foto(id:any)
  {
    Swal.fire({
      title:'Quieres eliminar esta foto?',
      showDenyButton:true,
      showConfirmButton:true,
      denyButtonText:'No',
      confirmButtonText:'Eliminar',
    }).then((result)=>{
      if(result.isConfirmed){
        this._fotoService.eliminar_foto(id,this.token).subscribe(
          response =>{
            this._fotoService.get_fotos_user_id(this.userid,this.token).subscribe(
              response =>{
                this.fotos = response.data;
              },error => {
                console.log(error);
              }
            )
          }
        )
      }else if(result.isDenied){
        Swal.close();
      }
    })

  }

}
