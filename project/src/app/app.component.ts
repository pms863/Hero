import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component'; // Importa el componente

@Component({
  selector: 'app-root',
  standalone: true,  // Este componente también es standalone
  imports: [RouterOutlet, HeroesComponent], // Agrega HeroesComponent aquí
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tour of Heroes';
}
