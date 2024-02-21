import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { Producto1Component } from './components/producto1/producto1.component';
import { Producto2Component } from './components/producto2/producto2.component';
import { IndexComponent } from './components/index/index.component';
import { Producto3Component } from './components/producto3/producto3.component';
import { VerProductoComponent } from './components/ver-producto/ver-producto.component';
import { ProveedoresComponent } from './components/proveedores/proveedores.component';
import { VerProveedorComponent } from './components/ver-proveedor/ver-proveedor.component';
import { AddProveedorComponent } from './components/add-proveedor/add-proveedor.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'index', component: IndexComponent },
  { path: 'producto1', component: Producto1Component },
  { path: 'producto2', component: Producto2Component },
  { path: 'producto3', component: Producto3Component },
  { path: 'productos/:id', component: VerProductoComponent },
  { path: 'proveedores', component: ProveedoresComponent },
  { path: 'proveedores/:id', component: VerProveedorComponent },
  { path: 'addProveedor', component: AddProveedorComponent },
  { path: 'trabajadores', component: AppComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
