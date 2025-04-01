import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { JuegoComponent } from './pages/juego/juego.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'juego', component: JuegoComponent },
];
