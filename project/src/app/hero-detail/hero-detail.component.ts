import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgIf, NgFor, UpperCasePipe } from '@angular/common';
import { Hero } from '../hero';

@Component({
  selector: 'app-hero-detail', 
  standalone: true,
  imports: [CommonModule, FormsModule, NgIf, NgFor, UpperCasePipe,], 
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent {
  @Input() hero?: Hero; 
}
