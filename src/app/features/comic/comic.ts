import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-comic',
  imports: [CommonModule, FormsModule],
  templateUrl: './comic.html',
  styleUrl: './comic.css',
})
export class Comic {

  filtro:string='';

  comic=[
    {nombre:"Batman", especie:"Comic", urgencia:"alta", recuperacion:85},
    {nombre:"Deadpool", especie:"Comic", urgencia:"alta", recuperacion:75},
    {nombre:"Invisible", especie:"Comic", urgencia:"media", recuperacion:65},
    {nombre:"Spider-Man", especie:"Comic", urgencia:"media", recuperacion:55},
    {nombre:"Wolverine", especie:"Comic", urgencia:"baja", recuperacion:45},
    {nombre:"Joker", especie:"Comic", urgencia:"baja", recuperacion:35},
  ];
}
