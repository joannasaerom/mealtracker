import {  Component, Output, EventEmitter } from '@angular/core';
import {  Meal  } from './meal.model';

@Component({
  selector: 'add-form',
  template:  `
  <form class="addForm">
    <h2>Add a meal</h2>
    <div class="form-group">
      <label for="mealName">Meal Name</label>
      <input #mealName type="text">
    </div>
    <div class="form-group">
      <label for="mealDetail">Meal Details</label>
      <input #mealDetail type="text">
    </div>
    <div class="form-group">
      <label for="mealCalories">Calorie Count</label>
      <input #mealCalories type="number">
    </div>
    <button type="button" class="btn btn-default"
    (click)="addClick(mealName.value, mealDetail.value, mealCalories.value);
            mealName.value='';
            mealDetail.value='';
            mealCalories.value='';">Add Meal!</button>
  </form>
  `
})

export class MealAddComponent {
  @Output() newMealSender = new EventEmitter();
  addClick(name: string, detail: string, calories: string){
    var parsedCalories: number = Number(calories);
    var newMeal: Meal = new Meal(name, detail, parsedCalories);
    this.newMealSender.emit(newMeal);
  }
}
