import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { find } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Adricarmona.github.io';

  activado: boolean = true;

  navbarMenu(){
    const opcionesNavbar = document.getElementsByClassName("opcionesNavbar")

    if (this.activado) {

      if (opcionesNavbar) {
        
        for (let i = 0; i < opcionesNavbar.length; i++) {
          (opcionesNavbar[i] as HTMLElement).style.display = "block";;
        }

      }

      this.activado = false;

    } else {
      
      if (opcionesNavbar) {
        
        for (let i = 0; i < opcionesNavbar.length; i++) {
          (opcionesNavbar[i] as HTMLElement).style.display = "none";;
        }

      }

      this.activado = true;

    }
  }

}