import { Component } from '@angular/core';

import { Hero } from './hero';

@Component({
    selector: 'little-tour',
    template: `
        <input #newhero (keyup.enter)="addHero(newhero.value)" (blur)="addHero(newhero.value); newhero.value=''">
        <button (click)="addHero(newhero.value)">Add</button>

        <ul>
            <li *ngFor="let hero of heroes">
                {{ hero.name }}
            </li>
        </ul>
    `
})

export class LittleTourComponent {
    heroes: Hero[];

  constructor() {
    this.heroes = [
      new Hero(1, 'Windstorm'),
      new Hero(15, 'Tornado'),
      new Hero(21, 'Magneta'),
      new Hero(25, 'Bombstone'),
      new Hero(30, 'Dr. IQ')
    ];
  }

    addHero(hero: string) {
        if(hero) {
            this.heroes.push(new Hero(1, hero));
        }
    }
}