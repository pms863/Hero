import { Component } from '@angular/core';
import { CommonModule, NgIf, NgFor, UpperCasePipe } from '@angular/common'; 
import { FormsModule } from '@angular/forms'; 
import {HEROES} from '../mock-heroes';
import { Hero } from '../hero';


@Component({
  selector: 'app-heroes',
  standalone: true,
  imports: [CommonModule, FormsModule, NgIf, NgFor, UpperCasePipe,], 
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

export class HeroesComponent {
  heroes = HEROES;
  selectedHero?: Hero;

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}