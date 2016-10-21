import {  Component, Input } from '@angular/core';
import {  Meal  } from './meal.model';

@Component({
  selector: 'calorie-total',
  template: `
  <h2>Total Calories: {{calculateTotal(mealsConsumed)}} kcal</h2>
  `
})

export class CalorieTotalComponent {
  @Input() mealsConsumed: Meal[];


  calculateTotal(mealsConsumed: Meal[]){
    var totalCalories = 0;
    for (var i = 0; i < mealsConsumed.length; i++){
      totalCalories += mealsConsumed[i].calories;
    }
    return totalCalories;
  }
}
