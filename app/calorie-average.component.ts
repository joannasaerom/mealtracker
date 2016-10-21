import {  Component, Input } from '@angular/core';
import {  Meal  } from './meal.model';

@Component({
  selector: 'calorie-average',
  template: `
  <h2>Average Calories: </h2>
  `
})

export class CalorieAverageComponent {
  @Input() mealsToAverage: number;
}
