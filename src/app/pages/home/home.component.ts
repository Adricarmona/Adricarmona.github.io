import { Component } from '@angular/core';
import { DatosBasicosComponent } from "./datos-basicos/datos-basicos.component";

@Component({
  selector: 'app-home',
  imports: [DatosBasicosComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
