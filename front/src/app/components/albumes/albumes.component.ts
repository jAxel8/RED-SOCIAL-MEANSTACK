import { Component, OnInit } from '@angular/core';
import { AlbumService } from 'src/app/services/album.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-albumes',
  templateUrl: './albumes.component.html',
  styleUrls: ['./albumes.component.css']
})
export class AlbumesComponent implements OnInit {

  public albums : any = {
    
  };
  public token;
  public identity;
  public album : any = {}
  public filtro = "";
  constructor(
    private _albumService : AlbumService
  ) {
    this.token = localStorage.getItem('token');
    this.identity = JSON.parse(localStorage.getItem('identity'));
   }

  ngOnInit(): void {

    this.obtener_albums();

  }

  crear_album(albumForm:any)
  {
    
    //this.album.user_id = this.identity._id;

    if(albumForm.valid)
    {

      this._albumService.crear_album(this.album,this.token).subscribe(
        response => {
          this.obtener_albums();
          Swal.fire({
            icon: 'success',
            title: 'El album se ha creado.',
            showConfirmButton: true,
          })
        },error =>  {
          console.log(error);
        }
      )
      
      


    }else{
      Swal.fire({
        title: 'Error!',
      text: 'Completa correctamente el formulario',
      icon: 'error',
      confirmButtonText: 'De acuerdo'
      })
    }
  }

  obtener_albums()
  {
    this._albumService.obtener_albums(this.filtro,this.token).subscribe(
      response =>{
        console.log(response);
        this.albums = response.data;

        console.log(this.albums);
      }, error =>{
        console.log(error);
      }
    )
  }

  eliminar_album(id:any)
  {
    this._albumService.eliminar_album(id,this.token).subscribe(
      response => {
        this.obtener_albums();
        Swal.fire({
          icon:'success',
          text:'El album se ha elimiado.'
        })
      },error =>{
        console.log(error);
      }
    )
  }

}
