import {  Component, Output, EventEmitter } from '@angular/core';
import {  Meal  } from './meal.model';

@Component({
  selector: 'add-form',
  template:  `
  <form class="addForm">
    <h2>Add a meal</h2>
    <div class="form-group">
      <label for="mealName">Meal Name</label>
      <input #mealName type="text" placeholder="Example: Hamburger">
    </div>
    <div class="form-group">
      <label>Meal time</label>
      <select #mealTime>
        <option>Breakfast</option>
        <option>Lunch</option>
        <option>Dinner</option>
        <option>Snack</option>
      </select>
    </div>
    <div class="form-group">
      <label for="mealDetail">Meal Details</label>
      <input #mealDetail type="text" placeholder="Example: I took the buns off of the hamburger">
    </div>
    <div class="form-group">
      <label for="mealCalories">Calorie Count</label>
      <input #mealCalories type="number" placeholder="Example: 650">
    </div>
    <button type="button" class="btn btn-default"
    (click)="addClick(mealName.value, mealDetail.value, mealCalories.value, mealTime.value);
            mealName.value='';
            mealDetail.value='';
            mealCalories.value='';
            mealTime.value='';">Add Meal</button>
  </form>
  `
})

export class MealAddComponent {
  @Output() newMealSender = new EventEmitter();
  addClick(name: string, detail: string, calories: string, mealTime: string){
    var parsedCalories: number = Number(calories);
    var newMeal: Meal = new Meal(name, detail, parsedCalories, mealTime);
    this.newMealSender.emit(newMeal);
  }
}
