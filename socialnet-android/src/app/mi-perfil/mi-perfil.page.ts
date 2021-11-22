import { Component, OnInit,DoCheck } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { FotosService } from '../services/foto.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-mi-perfil',
  templateUrl: './mi-perfil.page.html',
  styleUrls: ['./mi-perfil.page.scss'],
})
export class MiPerfilPage implements OnInit {

  public token;
  public identity;
  public likes;
  public fotos : Array<any> = [];
  public load_response:any;
  public seguidores :  Array<any> = [];
  public siguiendo :  Array<any> = [];
  public userid;
  constructor(
    private _fotoService:FotosService,
    private _userService:UserService,
    public alertController:AlertController,
    private userService: UserService,
    private router:Router
  ) {

    this.token = localStorage.getItem('token');
    
    
   }


  ngOnInit() {
    this.get_identity();
    this.obtener_fotos();
    this.obtener_seguidores();
    this.obtener_siguiendo();
  }

  ngDoCheck()
  {
    this.identity = this.userService.get_identity();
  }

  obtener_fotos()
  {
    this._fotoService.obtener_fotos_user(this.token).subscribe(
      response => {
        this.fotos = response.data;

      },error =>{
        console.log(error);
      }
    )
  }



  obtener_seguidores()
  {
    this._userService.obtener_seguidores_user(this.userid,this.token).subscribe(
      response =>{
        this.seguidores = response.follows;




      },error =>{
        console.log(error);
      }
    )
  }

  obtener_siguiendo(){
    this._userService.obtener_siguiendo_user(this.userid,this.token).subscribe(
      response =>{
        this.siguiendo = response.following;



        

      },error =>{
        console.log(error);
      }
    )
  }

 get_identity()
  {
    this.identity =JSON.parse(localStorage.getItem('identity'));
    this.userid = this.identity._id;
  }

  async cerrar_sesion(){
    const alert = await this.alertController.create({
      header:'Confirmación',
      message:'Quieres cerrar sesión?',
      buttons:[
        {
          text:'Si,salir',
          handler:() => { 
            localStorage.clear();
            this.router.navigate(['/login'])
          }
          
        },
        {
          text:'No',
          handler:()=>{
            console.log('No se cerro la sesión.')
          }
        }
      ]
    })
    
      await alert.present();
  }


}
