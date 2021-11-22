import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2'
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  public token;
  public identity;
  username:string;
  password:string

  constructor(
    private _userService: UserService,
    private _router: Router
  ) {
    this.token = localStorage.getItem('token');
   }

  ngOnInit() {

    if (this.token) {
      this._router.navigate(['/']);
    } else {
      
    }

  }



  login(loginForm:any)
  {
    if(loginForm.valid)
    {
      this._userService.login_user(this.username,this.password).subscribe(
        response =>{
          this.identity = response.data;
          response.data.password = undefined
          this._userService.mantener_sesion(response.token);

          localStorage.setItem('identity',JSON.stringify(this.identity));
          
          this._router.navigate(['/']);

        },
        error =>
        {
          Swal.fire({
            icon: 'error',
            title: 'Error',
            text: error.error.message
        })
        }
      )
    }else{
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Llene correctamente los campos'
    })
    }
  }


}
