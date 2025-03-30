import { Component } from '@angular/core';
import { DatosBasicosComponent } from "./datos-basicos/datos-basicos.component";
import { DescripcionComponent } from "./descripcion/descripcion.component";
import { ProyectosComponent } from "./proyectos/proyectos.component";

@Component({
  selector: 'app-home',
  imports: [DatosBasicosComponent, DescripcionComponent, ProyectosComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
