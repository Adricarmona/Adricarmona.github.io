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
  activado: boolean = false; // Inicialmente oculto

  navbarMenu() {
    const opcionesNavbar = document.getElementsByClassName("opcionesNavbar");
    const icono = document.getElementById("opciones") as HTMLElement;

    for (let i = 0; i < opcionesNavbar.length; i++) {
      const elemento = opcionesNavbar[i] as HTMLElement;

      if (!this.activado) {
        
        elemento.style.display = "block";
        setTimeout(() => {
          elemento.style.transform = "scale(1)";
        }, 10);

      } else {
        
        elemento.style.transform = "scale(0)";
        setTimeout(() => {
          elemento.style.display = "none";
        }, 300);
      
      }

      elemento.style.transition = "transform 0.3s ease-in-out, opacity 0.3s ease-in-out";
    }

    // Rotar la imagen
    if (icono) {
      icono.style.transform = this.activado ? "rotate(0deg)" : "rotate(180deg)";
      icono.style.transition = "transform 0.3s ease-in-out";
    }

    this.activado = !this.activado;
  }
}