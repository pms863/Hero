import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroDetailComponent } from '../hero-detail/hero-detail.component';
import { NgFor } from '@angular/common';
import { Hero } from '../hero';
import { MessageService } from '../message.service';
import { HEROES } from '../mock-heroes';
import { HeroService } from '../hero.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-heroes',
  imports: [CommonModule, NgFor, HeroDetailComponent,RouterModule], 
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes: Hero[] = [];

  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => {
        console.log('Heroes recibidos:', heroes); // <-- VERIFICAR SI LLEGAN DATOS
        this.heroes = heroes;
      });
  }
  
}