import { Component } from '@angular/core';
import {EmailValidator, FormsModule} from '@angular/forms';

@Component({
  selector: 'app-formulario',
  imports: [],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent {
  newData = {
    email: "laura@hotmail.com"
  }

}
