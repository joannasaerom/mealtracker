import {  Component, Input, Output, EventEmitter } from '@angular/core';
import {  Meal  } from './meal.model';

@Component ({
  selector: 'meal-list',
  template: `
  <div *ngFor="let currentMeal of mealList">
    <h2 (click)="editMeal(currentMeal)">Meal Name: {{currentMeal.name}}</h2>
    <h3>Details: {{currentMeal.detail}}</h3>
    <h3>Calories: {{currentMeal.calories}}</h3>
  </div>
  `
})

export class MealListComponent{
  @Input() mealList: Meal[];
  @Output() clickSender = new EventEmitter();

  editMeal(mealToEdit: Meal){
    this.clickSender.emit(mealToEdit);
  }
}
