import { Component } from '@angular/core';
import { Hero } from './hero';

@Component({
  selector: 'my-app',
  template: `
    <h1>{{ title }}</h1>
    <little-tour></little-tour>
  `,
})
export class AppComponent  {
  title: string;
  myHero: Hero;
  heroes: Hero[];

  constructor() {
    this.title = "Tour of Heroes";
    this.heroes = [
      new Hero(1, 'Windstorm'),
      new Hero(15, 'Tornado'),
      new Hero(21, 'Magneta'),
      new Hero(25, 'Bombstone'),
      new Hero(30, 'Dr. IQ')
    ];
    this.myHero = this.heroes[0];
  }
}
