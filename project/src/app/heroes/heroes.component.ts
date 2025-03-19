import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroDetailComponent } from '../hero-detail/hero-detail.component'; // Importar HeroDetailComponent
import { NgFor } from '@angular/common';
import { Hero } from '../hero';

@Component({
  selector: 'app-heroes',
  standalone: true,
  imports: [CommonModule, NgFor, HeroDetailComponent], // Agregar HeroDetailComponent
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent {
  heroes: Hero[] = [
    { id: 1, name: 'Iron Man' },
    { id: 2, name: 'Spider-Man' },
    { id: 3, name: 'Thor' }
  ];
  selectedHero?: Hero;

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}
