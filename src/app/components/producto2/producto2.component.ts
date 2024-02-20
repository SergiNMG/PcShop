import { Component } from '@angular/core';
import { Producto } from 'src/app/models/producto.model';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-producto2',
  templateUrl: './producto2.component.html',
  styleUrls: ['./producto2.component.css']
})
export class Producto2Component {

  posicion!: number;
  producto!: Producto;
  productos!: Producto[];
  productoSeleccionado!: Producto;

  constructor(private productoService: ProductoService) { }

  ngOnInit() {
    this.productos = this.productoService.getProductos();
  }

  findProduct(posicion: number) {
    this.producto = this.productos[posicion];
    this.productoSeleccionado = this.producto;
    console.log(this.producto);
  }

  selectProduct() {
    this.producto = this.productoSeleccionado;
    console.log(this.producto);
  }
}
