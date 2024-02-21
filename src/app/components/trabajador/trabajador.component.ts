import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Trabajador } from 'src/app/models/trabajador';

@Component({
  selector: 'app-trabajador',
  templateUrl: './trabajador.component.html',
  styleUrls: ['./trabajador.component.css']
})
export class TrabajadorComponent {
  // decorador input para el trabajador que se le pasa desde el padre
  @Input() trabajador!: Trabajador;
  // decxorador output para el evento likeTrabajador  
  @Output() likeTrabajador = new EventEmitter<number>;
  // decxorador output para el evento unlikeTrabajador
  @Output() unlikeTrabajador = new EventEmitter<number>; 
  // decxrador output para el evento borraTrabajador  
  @Output() eliminarTabajador = new EventEmitter<number>;
    
  ngOnInit(){
  }

  //metodo que recibe un trabajador y emite el evento likeTrabajador con el id del trabajador
  like(trabajador:Trabajador){
    this.likeTrabajador.emit(trabajador.id);
  }

  //metodo que recibe un trabajador y emite el evento unlikeTrabajador con el id del trabajador
  unlike(trabajador:Trabajador){
    this.unlikeTrabajador.emit(trabajador.id);
  }

  //metodo que recibe un trabajador y emite el evento borraTrabajador con el id del trabajador
  eliminar(trabajador:Trabajador){
    this.eliminarTabajador.emit(trabajador.id);
  }
}
