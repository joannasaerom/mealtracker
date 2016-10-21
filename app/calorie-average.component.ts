import {  Component, Input } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'calorie-average',
  template: `
  <h2 *ngIf="mealsConsumed">Average Calories: {{calculateAverage(mealsConsumed)}} kcal</h2>
  `
})

export class CalorieAverageComponent {
  @Input() mealsConsumed: Meal[];

  calculateAverage(mealsConsumed: Meal[]){
    var totalCalories = 0;
    var averageCalories = 0;
    if (mealsConsumed.length === 0) {
      return averageCalories;
    }
    for (var i = 0; i < mealsConsumed.length; i++){
      totalCalories += mealsConsumed[i].calories;
    }
    averageCalories = totalCalories / mealsConsumed.length;
    return averageCalories;
  }
}
