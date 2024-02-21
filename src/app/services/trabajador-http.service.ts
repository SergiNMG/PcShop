import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, retry } from 'rxjs';
import { Trabajador } from '../models/trabajador';

@Injectable({
  providedIn: 'root'
})
export class TrabajadorHttpService {

  url: string = "http://localhost:3000/trabajadores"

  constructor(private httpTrabajadorService: HttpClient) { }

  getTrabajadores(): Observable<Trabajador[]> {
    return this.httpTrabajadorService.get<Trabajador[]>(this.url)
    .pipe(retry(1));
  }

  getTrabajador(id: number): Observable<Trabajador>{
    return this.httpTrabajadorService.get<Trabajador>(this.url + "/" + id)
    .pipe(retry(1));
  }

  deleteTrabajador(id: number): Observable<Trabajador>{
    return this.httpTrabajadorService.delete<Trabajador>(this.url + "/" + id)
    .pipe(retry(1));
  }
}
