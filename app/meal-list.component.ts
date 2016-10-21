import {  Component, Input, Output, EventEmitter } from '@angular/core';
import {  Meal  } from './meal.model';

@Component ({
  selector: 'meal-list',
  template: `
  <div *ngFor="let currentMeal of meals">
    <h2>Meal Name: {{currentMeal.name}}</h2>
    <h3>Details: {{currentMeal.detail}}</h3>
    <h3>Calories: {{currentMeal.calories}}</h3>
  </div>
  `
})

export class MealListComponent{
  public meals: Meal[] = [
    new Meal("Test", "test", 300),
    new Meal("Test2", "test", 400)
  ];
}
