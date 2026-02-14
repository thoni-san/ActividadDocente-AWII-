import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Registro } from '../models/registro';

@Injectable({
  providedIn: 'root',
})
export class RegistroService {

  private http = inject(HttpClient);

  private API_USUARIOS = 'https://jsonplaceholder.typicode.com/users';

  getUsuarios(): Observable<Registro[]> {
    return this.http.get<Registro[]>(this.API_USUARIOS);
  }

  postUsuarios(usuario: Registro): Observable<Registro> {
    return this.http.post<Registro>(this.API_USUARIOS, usuario);
  }
}
