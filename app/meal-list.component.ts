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
  <div class="mealTimePipe">
  <label>Filter by Meal Time:</label>
  <select (change)="onMealChange($event.target.value)">
    <option value="all">Show All</option>
    <option value="Breakfast">Breakfast</option>
    <option value="Lunch">Lunch</option>
    <option value="Dinner">Dinner</option>
    <option value="Snack">Snack</option>
  </select>
</div>
  <div *ngFor="let currentMeal of mealList | calories:selectedCalories | mealTime:selectedMealTime">
    <h2><i class="fa fa-cutlery" aria-hidden="true"></i> {{currentMeal.name}} <span (click)="editMeal(currentMeal)" class="editLink">Edit</span></h2>
    <h3>Meal Time: {{currentMeal.mealTime}}</h3>
    <h3>Details: {{currentMeal.detail}}</h3>
    <h3>Calories: {{currentMeal.calories}} kcal</h3>
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
  public selectedMealTime: string = "all";
  onMealChange(optionFromMenu){
    this.selectedMealTime = optionFromMenu;
  }
}
