import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {

  anio: number=new Date().getFullYear();
  
  logoUrl:string="/images/comic-book.png"

  enlaces=[
    {nombre:'Home', link:'#'},
    {nombre:'Acerca', link:'#'},
    {nombre:'Comic', link:'#'},
    {nombre:'Contacto', link:'#'},
    {nombre:'Registro', link:'#'},
  ];

}
