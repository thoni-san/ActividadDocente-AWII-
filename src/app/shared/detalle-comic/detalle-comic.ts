import { Component, EventEmitter, Input, Output, output } from "@angular/core";
import { Comic } from '../../models/comic';

@Component({
    selector:'app-detalle-comic',
    imports:[],
    templateUrl: './detalle-comic.html',
    styleUrl: './detalle-comic.css',
})

export class DetalleComic {

    @Input() comic?:Comic;

    @Output() notificarAccion = new EventEmitter<string>();

    avissarIngreso():void{
        if(this.comic){
            this.notificarAccion.emit(
                `El cliente ${this.comic.nombre} ha ingresado una consulta`,
            );
        }
    }
}