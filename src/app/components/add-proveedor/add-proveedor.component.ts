import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Proveedor } from 'src/app/models/proveedor';
import { ProveedorHTTPService } from 'src/app/services/proveedor-http.service';

@Component({
  selector: 'app-add-proveedor',
  templateUrl: './add-proveedor.component.html',
  styleUrls: ['./add-proveedor.component.css']
})
export class AddProveedorComponent {

  newProveerdor: Proveedor = {
    id: 0,
    nombre: "",
    sede: ""
  }

  constructor (private proveedorService: ProveedorHTTPService,
    private router: Router) { }

  postProveedor(newProveedor: Proveedor){
    console.log(newProveedor);
    this.proveedorService.postProveedor(newProveedor)
    .subscribe({
      next: data => {
        console.log(data)
        this.navigateTo('/proveedores')
      },
      error: error => `Error ${error.status} ${error.statusText}`
    })
  }

  navigateTo(route: string){
    this.router.navigate([route]);
  }
}
