import { Component } from '@angular/core';

@Component({
  selector: 'keyup',
  template: `
    <input #box (keyup.enter)="update(box.value)" (blur)="update(box.value)">
    <p>{{values}}</p>
  `
})
export class KeyupComponent {
  values = '';
  update(value: string) {
    this.values = value;
  }
}