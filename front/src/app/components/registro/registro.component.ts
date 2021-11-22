import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  
  username: string;
  name: string;
  surname: string;
  password: string;
  imagePreview: any;
  email: string;
  profileImageFile: File;
  public token;

  constructor(private _userService : UserService,private router: Router ) 
  {   
        this.token = localStorage.getItem('token');
        this.imagePreview = 'assets/img/default-user.jpeg'
        this.username = '';
        this.name = '';
        this.surname = '';
        this.password = '';

        this.email = '';
  }

  ngOnInit(): void {

    if(this.token){
      this.router.navigate(['/']);
    }else{

    }
  }




registro(registroForm:any)
{

  if(registroForm.valid)
  {
    
    const fd = new FormData()
    fd.append('profileImage', this.profileImageFile)
    fd.append('username', this.username)
    fd.append('password', this.password)
    fd.append('name', this.name)
    fd.append('surname', this.surname)
    fd.append('email', this.email)

    this._userService.registro_usuario(fd).subscribe(
      response => 
      {
        Swal.fire({
          icon: 'success',
          title: 'Te haz registrado con exito!',
          showConfirmButton: true,
        })

        this.router.navigate(['/login']);
      },
      error  => {
        console.log(error);
        Swal.fire({
          icon:'error',
          text:error.error.message
        })
        
      }
    )
      
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




