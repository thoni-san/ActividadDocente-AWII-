import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiResponse } from '../models/pet';

@Injectable({
  providedIn: 'root',
})
export class PetService {
  
  private http = inject(HttpClient);

  private API_PET='https://rickandmortyapi.com/'

  getComic():Observable<ApiResponse>{
    return this.http.get<ApiResponse>(this.API_PET);
  }
}
