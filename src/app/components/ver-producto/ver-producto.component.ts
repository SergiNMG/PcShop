import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Producto } from 'src/app/models/producto.model';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-ver-producto',
  templateUrl: './ver-producto.component.html',
  styleUrls: ['./ver-producto.component.css']
})
export class VerProductoComponent implements OnInit {
  id!: number;
  producto!: Producto;
  productoSeleccionado: Producto = {
    id: 0,
    componente: "",
    nombre: "",
    precio: 0,
    descripcion: ""
  };

  constructor(private activatedRoute: ActivatedRoute,
    private productoService: ProductoService,
    private router: Router) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.params['id'];
    this.producto = this.productoService.getProducto(this.id);
    this.productoSeleccionado = { ... this.producto };
  }

  modificar(productoSeleccionado: Producto) {
    console.log(this.productoService.getProducto(this.producto.id));

    this.productoService.putProducto(productoSeleccionado);
    console.log(this.productoService.getProducto(this.producto.id));

    this.navigateTo('/producto3');
  }

  eliminar(id: number) {
    console.log(id)
    this.productoService.deleteProducto(id);
    this.navigateTo("/producto3");
  }

  volver() {
    this.navigateTo("/producto3");
  }

  navigateTo(route: string) {
    this.router.navigate([route]);
  }
}
