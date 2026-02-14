import { Component } from '@angular/core';
import { Footer } from "../../shared/footer/footer";
import { Formulario } from "../../shared/formulario/formulario";

@Component({
  selector: 'app-registro',
  standalone: true,
  templateUrl: './registro.html',
  imports: [Footer, Formulario],
})
export class Registro {

}
