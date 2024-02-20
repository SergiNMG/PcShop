import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Proveedor } from 'src/app/models/proveedor';
import { ProveedorHTTPService } from 'src/app/services/proveedor-http.service';

@Component({
  selector: 'app-ver-proveedor',
  templateUrl: './ver-proveedor.component.html',
  styleUrls: ['./ver-proveedor.component.css']
})
export class VerProveedorComponent implements OnInit {

  proveedores!: Proveedor[];
  proveedor: Proveedor = {
    id: 0,
    nombre: "",
    sede: ""
  };

  constructor(private activatedRoute: ActivatedRoute,
    private proveedorService: ProveedorHTTPService) { }

  ngOnInit() {
    let id: number = this.activatedRoute.snapshot.params['id'];
    this.proveedorService.getProveedor(id).subscribe({
      next: data => this.proveedor = data,
      error: error => console.log(`Error ${error.status} ${error.statusText}`)
    })
  }

  putProveedor() {
    this.proveedorService.putProveedor(this.proveedor).subscribe({
      next: data => {
        console.log(data);

        this.proveedorService.getProveedores().subscribe(data => this.proveedores = data)
      },
      error: error => console.log(`Error ${error.status} ${error.statusText}`)
    })
  }

  delete(id: number) {
    this.proveedorService.deleteProveedor(id).subscribe({
      next: data => {
        console.log(data)
        this.ngOnInit()
      },
      error: error => console.log(`Error ${error.status} ${error.statusText}`)
    })
  }
}
