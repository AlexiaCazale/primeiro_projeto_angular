import { Injectable } from '@angular/core';

import { Animal } from '../Animal';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListService {
  private apiUrl = 'http://localhost:3000/animals';

  constructor(private http: HttpClient) {}

  remove(id: number){
    //console.log("Ativando service");
    return this.http.delete<Animal>(`${this.apiUrl}/${id}`); //remove o animal no back-end
  }

  getAll(): Observable<Animal[]> {
    return this.http.get<Animal[]>(this.apiUrl);
  }

  getItem(id: number): Observable<Animal>{
    return this.http.get<Animal>(`${this.apiUrl}/${id}`);
  }
}
