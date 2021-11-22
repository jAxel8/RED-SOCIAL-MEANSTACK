import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  public termino;
  public identity;
  constructor(
    private _router : Router,
  ) { 
    this.identity = JSON.parse(localStorage.getItem('identity'));
  }

  ngOnInit(): void {

  }
   ngDoCheck(){
    this.identity = JSON.parse(localStorage.getItem('identity'));
  }


  cerrar_sesion()
  {
    localStorage.clear();
    this.identity = null;
    this._router.navigate(['/login'])
  }

  buscar()
  {
    this._router.navigate(['buscar',this.termino])

   this.termino = '';
  }

  

}
