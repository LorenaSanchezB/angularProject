import { Component } from '@angular/core';

@Component({
  selector: 'app-lista',
  imports: [],
  templateUrl: './lista.component.html',
  styleUrl: './lista.component.css'
})
export class ListaComponent { 
  titulo = "Componente Lista 11111";
  propertyBinding = "red";

  verTitulo() {
    console.log ("se muestra titulo")
  }

}
