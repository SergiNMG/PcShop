import { Injectable } from '@angular/core';
import { Producto } from '../models/producto.model';
import mockProductos from '../models/productos.mock';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  productos: Producto[] = mockProductos;

  getProductos() {
    return this.productos;
  }

  getProducto(id: number) {
    let pos: number = this.productos.findIndex(p => p.id == id);
    return this.productos[pos];
  }

  putProducto(productoModificado: Producto) {
    let pos = this.productos.findIndex(p => p.id == productoModificado.id);
    return this.productos[pos] = productoModificado;
  }

  postProducto(productoNuevo: Producto) {
    return this.productos.push(productoNuevo);
  }

  deleteProducto(id: number) {
    let pos: number = this.productos.findIndex(p => p.id == id);
    return this.productos.splice(pos, 1);
  }
}
