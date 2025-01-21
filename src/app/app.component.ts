import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListaComponent } from './lista/lista.component';
import { FormularioComponent } from './formulario/formulario.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ListaComponent, FormularioComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'firstapp';
}
