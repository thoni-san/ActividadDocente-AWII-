import { Component, inject, signal } from '@angular/core';
import { PetService } from '../../services/pet-service';
import { Pet } from '../../models/pet';

@Component({
  selector: 'app-comic',
  imports: [],
  templateUrl: './comic.html',
  styleUrl: './comic.css',
})
export class Comic {

  private comicServicio = inject(PetService)

  comic = signal<Pet[]>([]);

  ngOnInit(){
    this.comicServicio.getComic().subscribe(datos=>{
      this.comic.set(datos.data);
    })
  }
}
