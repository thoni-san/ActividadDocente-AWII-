import { Component } from '@angular/core';
import { Comic } from '../../models/comic';
import { DetalleComic } from "../../shared/detalle-comic/detalle-comic";

@Component({
  selector: 'app-consultas',
  imports: [DetalleComic],
  templateUrl: './consultas.html',
  styleUrl: './consultas.css',
})
export class Consultas {

  Comic=[
    {id:1, nombre:"Batman", especie:"Comic", historial:"El caballero oscuro regresa con nuevas historias."},
    {id:2, nombre:"Deadpool", especie:"Comic", historial:"Humor, acción y caos sin límites."},
    {id:3, nombre:"Invisible", especie:"Comic", historial:"Un héroe joven en un mundo brutal."},
    {id:4, nombre:"Spider-Man", especie:"Comic", historial:"Un gran poder conlleva gran responsabilidad."},
    {id:5, nombre:"Wolverine", especie:"Comic", historial:"Un guerrero indestructible marcado por la violencia y la redención."},
    {id:6, nombre:"Joker", especie:"Comic", historial:"Donde reina la locura, él siempre tiene la última risa."},
  ];
  
  comicSeleccionado: Comic | null = null;

  mensajeAviso:string='';

  verDetalles(comic:Comic){
    this.comicSeleccionado=comic;
  }

  procesarAviso(mensaje:string){
    this.mensajeAviso=mensaje;
  }
}
