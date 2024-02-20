import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductoComponent } from './components/producto/producto.component';
import { Producto1Component } from './components/producto1/producto1.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { FormsModule } from '@angular/forms';
import { Producto2Component } from './components/producto2/producto2.component';
import { IndexComponent } from './components/index/index.component';
import { Producto3Component } from './components/producto3/producto3.component';
import { VerProductoComponent } from './components/ver-producto/ver-producto.component';
import { ProveedoresComponent } from './components/proveedores/proveedores.component';
import { VerProveedorComponent } from './components/ver-proveedor/ver-proveedor.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductoComponent,
    Producto1Component,
    HomeComponent,
    HeaderComponent,
    Producto2Component,
    IndexComponent,
    Producto3Component,
    VerProductoComponent,
    ProveedoresComponent,
    VerProveedorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
