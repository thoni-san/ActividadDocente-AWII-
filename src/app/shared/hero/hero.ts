import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'app-hero',
  imports: [],
  templateUrl: './hero.html',
  styleUrl: './hero.css',
})
export class Hero {

  @Input() titulo!: string;
  @Input() testoBoton!: string;
  @Input() imagen!: string;

}
