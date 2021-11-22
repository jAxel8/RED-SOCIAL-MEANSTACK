import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-configuracion',
  templateUrl: './configuracion.component.html',
  styleUrls: ['./configuracion.component.css']
})
export class ConfiguracionComponent implements OnInit {

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

  constructor(private _userService : UserService,private router: Router,private activatedRoute:ActivatedRoute ) 
  {   
        this.token = localStorage.getItem('token');
        this.identity = JSON.parse(localStorage.getItem('identity'));
       activatedRoute.params.subscribe( 
         params => {
          this.profileid = params['id'];
          
          if(this.profileid != this.identity._id){
            this.router.navigate(['configuracion',this.identity._id])
          }else{
            _userService.obtener_usuario(this.profileid,this.token).subscribe(
              response => {
               
                this.user = response.data;
                console.log(this.user)
                this.imagePreview = this.user.profileImg
              },error => {
                console.log(error);
              }
            )
          }
          
       })


  }

  ngOnInit(): void {

     this.currentRoute= this.router.url;

  }




actualizar(actualizarForm:any)
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
            this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
              this.router.navigate([this.currentRoute]); // navigate to same route
          });
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
        Swal.fire({
          icon:'success',
          text:'Datos actualizados'
        })

        
        localStorage.setItem('identity',JSON.stringify(this.user));
        
      },error =>{
        console.log(error);
      }
    )


    }
  
      
  }else
  {
    Swal.fire({
      title: 'Error!',
      text: 'Completa correctamente el formulario',
      icon: 'error',
      confirmButtonText: 'De acuerdo'
    })
    
  }


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