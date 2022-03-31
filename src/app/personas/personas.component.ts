import { Component } from "@angular/core";

@Component({
   selector: 'app-personas',
   templateUrl: './personas.component.html',
   styleUrls: ['./personas.component.css']
})


export class PersonasComponrnt {
  deshabilitar = false;
  mensaje= 'No se ha agregado ninguna persona';
  titulo = 'Ingeniero';

  agregarPersona(){
    this.mensaje = 'Persona agregada';
  }

  modificarTitulo(event: Event){
    console.log('Entradndo al metodo modificar titulo')
    this.titulo = (<HTMLInputElement>event.target).value;
  }

}
