import { Component, OnInit,ViewChild,ElementRef } from '@angular/core';
import { AlbumService } from 'src/app/services/album.service';
import { FotosService } from 'src/app/services/fotos.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-index-fotos',
  templateUrl: './index-fotos.component.html',
  styleUrls: ['./index-fotos.component.css']
})
export class IndexFotosComponent implements OnInit {

  public fotos : Array<any> = [];
  nombre: string;
  album_id: string;
  descripcion: string;
  imagePreview: any;
  ImageFile: File;
  public filtro;
  public identity;
  public token;
  public load_response:any;

  @ViewChild('cancelBtn') cancelBtn : ElementRef;
  @ViewChild('closeBtn') closeBtn: ElementRef;


  constructor(private _fotoService : FotosService,private  _albumService:AlbumService) {

    this.filtro = '';
    this.token = localStorage.getItem('token');
    this.nombre = '';
    this.descripcion = '';
    this.imagePreview = 'assets/img/default-img.png';
    this.identity = JSON.parse(localStorage.getItem('identity'));

   }

  ngOnInit(): void {
    this.obtener_fotos_user();
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

      this._fotoService.subir_foto(fd).subscribe(
        response =>{
          this.load_response = false;
          this.obtener_fotos_user();
          this.close_form_modal();
          
          
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
    this.album_id = '';
    this.descripcion = '';
    this.imagePreview = 'assets/img/default-img.png';
  }

  obtener_fotos_user()
  {
    this._fotoService.obtener_fotos_user(this.token).subscribe(
      response =>{
        this.fotos = response.data;
        console.log(this.fotos)

      },
      error =>{
        console.log(error);
      }
    )
  }
  
  eliminar_foto(id:any)
  { 
    this.load_response = true;
    
    if(this.load_response= true)
    {
      Swal.fire({
        text : 'Eliminando....',
        showConfirmButton:false,
        
      })

      Swal.showLoading()
    }

    


    

    this._fotoService.eliminar_foto(id,this.token).subscribe(
      response  => {
        this.close_modal();
        this.load_response = false;
        Swal.close();
        this.obtener_fotos_user();


      },
      error  => {
        console.log(error);
      }
    ) 
      
      
  }

  close_modal()
  {
    this.cancelBtn.nativeElement.click();
  }

  close_form_modal()
  {
    this.closeBtn.nativeElement.click();
  }

}
