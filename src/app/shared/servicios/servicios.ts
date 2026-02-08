import { Component } from '@angular/core';

@Component({
  selector: 'app-servicios',
  imports: [],
  templateUrl: './servicios.html',
  styleUrl: './servicios.css',
})
export class Servicios {

  subtitulo: string = "Aquí el arte, la creatividad y la pasión por los cómics se encuentran. Sumérgete en un mundo donde cada historia inspira.";

  serviciosSeleccionado: string = "ninguno";

  servicios = [
    {
      id: 1,
      nombre: "Batman",
      descripcion: "El caballero oscuro regresa con nuevas historias.",
      imagen: "https://imgs.search.brave.com/Yo26lWhF7Uw2Z3hlXbGrbAlVIs-y2YtgDeaBEs35ie4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS9p/bWFnZXMvZmVhdHVy/ZWQvYmF0bWFuLWFu/aW1hdGVkLWFkdmVu/dHVyZXMtODdna2Jl/bTIxMzhtdWpkeS5q/cGc",
      activo: true
    },
    {
      id: 2,
      nombre: "Deadpool",
      descripcion: "Humor, acción y caos sin límites.",
      imagen: "https://imgs.search.brave.com/7CQf0aUUDZvYPNfi_rYYFvbbAgT21vLyLz7fIoCqLH8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2NiLzA4/LzU0L2NiMDg1NGRm/ODBlNzc0ZmMzMDM3/ODVkODFkNWEwNGE4/LmpwZw",
      activo: false
    },
    {
      id: 3,
      nombre: "Invincible",
      descripcion: "Un héroe joven en un mundo brutal.",
      imagen: "https://imgs.search.brave.com/tdG0dM0WEQdADw-rEgxAMaxTsyDWMFhiJFX2gDzEiFw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL1Mv/cHYtdGFyZ2V0LWlt/YWdlcy8zMTYxZDg3/MTg3ZTAxYzVjYzE1/MzY4OTE4YmM1NDRj/ZjI3YjFkNjg0OTQx/ZTRiNGJjZmRkMWZj/Zjk4M2Y4M2ViLnBu/Zw",
      activo: true
    },
    {
      id: 4,
      nombre: "Spider-Man",
      descripcion: "Un gran poder conlleva gran responsabilidad.",
      imagen: "https://imgs.search.brave.com/k2LP8j3YWI-QMJ90t-9Aeg-xRW1xkq_EU43uo8LI5_c/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS9p/bWFnZXMvaGQvc3Bp/ZGVyLW1hbi1sZWFw/LW1hcnZlbC1wYy13/d2lyangyOWkxbGc4/MjhwLmpwZw",
      activo: false
    },
    {
      id: 5,
      nombre: "Wolverine",
      descripcion: "Un guerrero indestructible marcado por la violencia y la redención.",
      imagen: "https://imgs.search.brave.com/rWaFqFeRsS-rV3xJtgmYDo9jbSCK7DNrzDJQBvIytDE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMwLmNicmltYWdl/cy5jb20vd29yZHBy/ZXNzL3dwLWNvbnRl/bnQvdXBsb2Fkcy8y/MDI1LzAxLzEwLWRh/cmtlc3Qtd29sdmVy/aW5lLWNvbWljcy1l/dmVyLmpwZz9xPTQ5/JmZpdD1jcm9wJnc9/MjIwJmg9MTgyJmRw/cj0y",
      activo: true
    },
    {
      id: 6,
      nombre: "Joker",
      descripcion: "Donde reina la locura, él siempre tiene la última risa.",
      imagen: "https://imgs.search.brave.com/2C8vtxATDM0LLbwhtHrzka2xdfDFVCZYg_wFzjdTa_0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS9p/bWFnZXMvZmVhdHVy/ZWQvam9rZXItY29t/aWMtY3J4czJ3Y3Q0/eTVxdHBndS5qcGc",
      activo: false
    },
  ];

  serviciosFiltrados = this.servicios;

  seleccionar(nombre: string) {
    this.serviciosSeleccionado = nombre;
  }

  busqueda(event:Event){
    const valorBuscar=(event.target as HTMLInputElement).value;

    this.subtitulo='Resultados para: ${valorBuscar}';

    this.serviciosFiltrados=this.servicios.filter(s =>
      s.nombre.toLowerCase().includes(valorBuscar.toLocaleLowerCase())
    );
  }

}