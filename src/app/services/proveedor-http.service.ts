import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, retry } from 'rxjs';
import { Proveedor } from '../models/proveedor';

@Injectable({
  providedIn: 'root'
})
export class ProveedorHTTPService {

  url: string = "http://localhost:3000/proveedores"

  constructor(private httpService: HttpClient) { }

  getProveedores(): Observable<Proveedor[]> {
    return this.httpService.get<Proveedor[]>(this.url)
      .pipe(retry(1));
  }

  getProveedor(id: number): Observable<Proveedor> {
    return this.httpService.get<Proveedor>(this.url + '/' + id)
      .pipe(retry(1));
  }

  putProveedor(proveedor: Proveedor): Observable<Proveedor> {
    return this.httpService.put<Proveedor>(this.url + '/' + proveedor.id, proveedor)
      .pipe(retry(1));
  }

  postProveedor(proveedor: Proveedor): Observable<Proveedor> {
    return this.httpService.post<Proveedor>(this.url, proveedor);
  }

  deleteProveedor(id: number): Observable<Proveedor[]> {
    return this.httpService.delete<Proveedor[]>(this.url + '/' + id)
      .pipe(retry(1));
  }
}
