import { Component } from '@angular/core';
import { Hero } from "../../shared/hero/hero";
import { Comic } from "../../shared/comic/comic";
import { Servicios } from '../../shared/servicios/servicios';

@Component({
  selector: 'app-home',
  imports: [Hero, Servicios, Comic],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

}
