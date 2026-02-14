import { Component, inject, signal, OnInit } from '@angular/core';
import { RegistroService } from '../../services/registro-service';
import { Registro } from '../../models/registro';

@Component({
  selector: 'app-formulario',
  standalone: true,
  templateUrl: './formulario.html',
  styleUrl: './formulario.css',
})
export class Formulario implements OnInit {

  private serviciosUsuario = inject(RegistroService);

  listaUsuarios = signal<Registro[]>([]);

  nuevoComic: Registro = {
    name: '',
    email: '',
    telefono: ''
  };

  ngOnInit() {
    this.obtenerUsuarios();
  }

  obtenerUsuarios() {
    this.serviciosUsuario.getUsuarios().subscribe((datosUsuarios: Registro[]) => {
      this.listaUsuarios.set(datosUsuarios);
    });
  }
}
