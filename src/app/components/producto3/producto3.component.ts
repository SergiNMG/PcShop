import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Producto } from 'src/app/models/producto.model';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-producto3',
  templateUrl: './producto3.component.html',
  styleUrls: ['./producto3.component.css']
})
export class Producto3Component implements OnInit {

  productos!: Producto[];
  producto!: Producto;

  constructor(private productoService: ProductoService,
    private router: Router) { }

  ngOnInit() {
    this.productos = this.productoService.getProductos();
  }

  eliminar(id: number) {
    console.log(id);
    this.productoService.deleteProducto(id);
    this.ngOnInit();
  }

  navigateTo(route: string) {
    this.router.navigate([route]);
  }
}
