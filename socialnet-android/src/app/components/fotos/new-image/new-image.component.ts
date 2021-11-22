import { Component, OnInit } from '@angular/core';
import { FotosService } from 'src/app/services/foto.service';
import Swal from 'sweetalert2';
import { io } from "socket.io-client";
import { GLOBALSOCKET } from 'src/app/services/GLOBAL';
import { LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';
@Component({
  selector: 'app-new-image',
  templateUrl: './new-image.component.html',
  styleUrls: ['./new-image.component.scss'],
})
export class NewImageComponent implements OnInit {

  nombre: string;
  descripcion: string;
  imagePreview: any;
  ImageFile: File;
  public identity;
  public token;
  public load_response:any;
  public socket = io(GLOBALSOCKET.url,{transports: ['websocket'], upgrade: false});
  constructor(
    private _fotoService:FotosService,
    public loadingController:LoadingController,
    private _router : Router
  ) { 
    this.token = localStorage.getItem('token');
    this.identity = JSON.parse(localStorage.getItem('identity'))
    this.nombre = '';
    this.descripcion = '';
    this.imagePreview = 'assets/img/default-img.png';
  }

  ngOnInit() {
   
  }




  subir_foto(fotoForm:any)
  {
    if(fotoForm.valid && this.ImageFile)
    {
      

        const fd = new FormData();
      fd.append('nombre',this.nombre)
      fd.append('descripcion',this.descripcion)
      fd.append('imagen',this.ImageFile)
      fd.append('user',this.identity._id);
      this.limpiarForm();

      this.load_response = true;

      this.presentLoading();

      this._fotoService.subir_foto(fd).subscribe(
        response =>{

          this.loadingController.dismiss();

          this.load_response = false;
          this._router.navigate(['/tabs/mis-fotos/'])
          this.socket.emit('new-image',{data:response.data});
          
        },error =>{
          console.log(error);
        }
      )



    }else{
      Swal.fire({
        title:'AVISO',
        icon:'warning',
        text:'Completa correctamente el formulario',
        confirmButtonText:'De acuerdo'
        
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
        this.ImageFile = file
    } catch (err) {
        console.log(err)
    }
  
  }


  limpiarForm()
  {
    this.nombre = '';
    this.descripcion = '';
    this.imagePreview = 'assets/img/default-img.png';
  }


  async presentLoading() {
    const loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: 'Subiendo...'
    });
    await loading.present();
  }


}
