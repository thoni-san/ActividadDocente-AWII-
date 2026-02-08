import { Component } from '@angular/core';
import { Hero } from "../../shared/hero/hero";
import { Servicios } from "../../shared/servicios/servicios";
import { Comic } from "../../shared/comic/comic";

@Component({
  selector: 'app-home',
  imports: [Hero, Servicios, Comic],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

}
