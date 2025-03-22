import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { AppComponent } from './app.component'; // Import the standalone component

@NgModule({
  declarations: [
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppComponent ,
    HeroesComponent,
    HeroDetailComponent],
  providers: [],
  bootstrap: []
})
export class AppModule { }