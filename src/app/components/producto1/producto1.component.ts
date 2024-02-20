import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/models/producto.model';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-producto1',
  templateUrl: './producto1.component.html',
  styleUrls: ['./producto1.component.css']
})
export class Producto1Component implements OnInit {

  productos!: Producto[];

  constructor(private productoService: ProductoService) { }

  ngOnInit() {
    this.productos = this.productoService.getProductos();
  }

  //productos: Producto[] = this.productoService.getProductos();

}
