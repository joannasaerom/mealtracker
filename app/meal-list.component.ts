import {  Component, Input, Output, EventEmitter } from '@angular/core';
import {  Meal  } from './meal.model';

@Component ({
  selector: 'meal-list',
  template: `
  <div class="caloriesPipe">
    <label>Filter by Calories:</label>
    <select (change)="onChange($event.target.value)">
      <option value="all">Show All</option>
      <option value="highCalories">500+ kcal</option>
      <option value="lowCalories"> Less than 500 kcal</option>
    </select>
  </div>
  <div *ngFor="let currentMeal of mealList | calories:selectedCalories">
    <h2><i class="fa fa-cutlery" aria-hidden="true"></i> {{currentMeal.name}} <span (click)="editMeal(currentMeal)" class="editLink">Edit</span></h2>
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
  public selectedCalories: string = "all";
  onChange(optionFromMenu){
    this.selectedCalories = optionFromMenu;
  }
}
