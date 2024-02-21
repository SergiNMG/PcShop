import { Component, OnInit } from '@angular/core';
import { Trabajador } from './models/trabajador';
import { TrabajadorHttpService } from './services/trabajador-http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'pcshop-app';

  //declarar la variable titulo
  titleTrabajadores: string = "Listado de Trabajadores";

 //declarar la variable trabajadores array del tipo Trabajador
  trabajadores!: Trabajador[];
  trabajador!: Trabajador;

  constructor (private httpService: TrabajadorHttpService) { }

  ngOnInit(){
   this.httpService.getTrabajadores().subscribe(data =>{
    console.log(data);
    this.trabajadores = data;
   });
  }

 // metodo para borrar al trabajador pasado por id     
 borrar(id:number){
  this.httpService.deleteTrabajador(id).subscribe(data => console.log(data));
 }

 // metodo para sumar un voto al trabajador pasado por id
//  sumaVoto(id:number){
//   this.httpService.getTrabajador(id).subscribe({
//     next: data => {
//       console.log(data);
//       this.trabajador = data;
//       this.trabajador.votos += 1;
//     },
//     error: error => console.log(`Error: ${error.status} ${error.textStatus}`)
//   });
//  }

 sumaVoto(id:number){
  this.httpService.getTrabajador(id).subscribe(data => data.votos += 1);
 }

 // metodo para restar un voto al trabajador pasado por id
 restaVoto(id:number){
  this.httpService.getTrabajador(id).subscribe({
    next: data => {
      console.log(data)
      this.trabajador = data;
      this.trabajador.votos > 0 ? this.trabajador.votos -= 1 : null;
    },
    error: error => console.log(`Error: ${error.status} ${error.textStatus}`)
  });
 }
}
