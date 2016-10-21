import {  Component } from '@angular/core';
import {  Meal  } from './meal.model';



@Component({
  selector: 'my-app',
  template: `
  <div class="container">
    <h1>Meal Tracker</h1>
    <meal-list></meal-list>
  </div>
  `
})

export class AppComponent {

}
