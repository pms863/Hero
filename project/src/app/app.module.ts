import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { HeroDetailComponent } from './hero-detail/hero-detail.component';  
import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    AppComponent,
    HeroesComponent
  ],
  providers: [],
  bootstrap: []
})
export class AppModule { }  