import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { AlertController } from '@ionic/angular';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss'],
})
export class EditProfileComponent implements OnInit {
  username: string;
  name: string;
  surname: string;
  password: string;
  imagePreview: any;
  email: string;
  profileImageFile: File;
  public token;
  public identity;
  public profileid;
  public load_response:any;
  public currentRoute;
  public user: any = {};
  constructor(private _userService:UserService, public alertController:AlertController, private router:Router) { 

    this.token = localStorage.getItem('token');
    this.identity = JSON.parse(localStorage.getItem('identity'));


  }

  

  ngOnInit() {
    this.obtener_usuario();
  }

  update(actualizarForm)
  {
    if(actualizarForm.valid)
  {
    
    if(this.profileImageFile){

      this.load_response = true;
    
      if(this.load_response= true)
      {
        Swal.fire({
          text : 'Actualizando....',
          showConfirmButton:false,
          
        })
  
        Swal.showLoading()
      }

      const fd = new FormData()
    fd.append('imagenperfil', this.profileImageFile)
    fd.append('username', this.user.username)
    fd.append('password', this.user.password)
    fd.append('name', this.user.name)
    fd.append('surname', this.user.surname)
    fd.append('email', this.user.email)

    this._userService.actualizar_usuario(this.profileid,fd).subscribe(
      response => {
        this.load_response = false;
        

      
        this._userService.obtener_usuario(this.profileid,this.token).subscribe(
          response2 => {
            this.user = response2.data;
            Swal.close();
            localStorage.setItem('identity',JSON.stringify(this.user));
            this.obtener_usuario();
          }
        )


      },error => {
        console.log(error);
      }
    )


    }else{
      const fd = new FormData()
    fd.append('username', this.user.username)
    fd.append('password', this.user.password)
    fd.append('name', this.user.name)
    fd.append('surname', this.user.surname)
    fd.append('email', this.user.email)
    
    this._userService.actualizar_usuario(this.profileid,fd).subscribe(
      response =>{
        this.load_response = false;

        Swal.close();
        localStorage.setItem('identity',JSON.stringify(this.user));

        this.presentAlert('Aviso','Sus datos han sido actualizados.')
        
      },error =>{
        console.log(error);
      }
    )


    }
  
      
  }else
  {
    this.presentAlert('Advertencia','Complete correctamente el formulario.');
    
  }
  }
  

  async presentAlert(header:string,mensaje:string) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: header,
      message: mensaje,
      buttons: ['OK']
    });

    await alert.present();
  }
  


  obtener_usuario()
  {
    this._userService.obtener_usuario(this.identity._id,this.token).subscribe(
      response => {
        
        this.user = response.data;  

        this.imagePreview = this.user.profileImg;
        this.profileid = this.user._id;
      },error =>{
        console.log(error);
      }
    )
  }

  

subirImagen(file) {
  try {
      var reader = new FileReader();
      reader.onload = (e: any) => {
          this.imagePreview = e.target.result;
      };
      reader.readAsDataURL(file);
      this.profileImageFile = file
  } catch (err) {
      console.log(err)
  }


  }
}
