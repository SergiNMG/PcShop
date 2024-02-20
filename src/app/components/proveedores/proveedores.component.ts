import { Component, OnInit } from '@angular/core';
import { Proveedor } from 'src/app/models/proveedor';
import { ProveedorHTTPService } from 'src/app/services/proveedor-http.service';

@Component({
  selector: 'app-proveedores',
  templateUrl: './proveedores.component.html',
  styleUrls: ['./proveedores.component.css']
})
export class ProveedoresComponent implements OnInit {

  proveedores!: Proveedor[];

  constructor(private proveedorService: ProveedorHTTPService) { }

  ngOnInit() {
    this.proveedorService.getProveedores()
      .subscribe({
        next: datos => this.proveedores = datos,
        error: error => console.log(`Error: ${error.status} ${error.statusText}`)
      });
  }
}
