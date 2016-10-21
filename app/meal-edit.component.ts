import {  Component, Input, Output, EventEmitter } from '@angular/core';
import {  Meal  } from './meal.model';

@Component({
  selector: 'edit-form',
  template: `
  <form *ngIf="selectedMeal" class="editForm">
    <h2>Edit This Meal</h2>
    <div class="form-group">
      <label for="selectedMealName">Meal Name</label>
      <input id="selectedMealName" name="selectedMealName" [(ngModel)]="selectedMeal.name">
    </div>
    <div class="form-group">
      <label for="selectedMealTime">Meal time</label>
      <select [(ngModel)]="selectedMeal.mealTime" name="selectedMealTime">
        <option>Breakfast</option>
        <option>Lunch</option>
        <option>Dinner</option>
        <option>Snack</option>
      </select>
    </div>
    <div class="form-group">
      <label for="selectedMealDetail">Meal Details</label>
      <input id="selectedMealDetail" name="selectedMealDetail" [(ngModel)]="selectedMeal.detail">
    </div>
    <div class="form-group">
      <label for="selectedMealCalories">Calorie Count</label>
      <input id="selectedMealCalories" name="selectedMealCalories" [(ngModel)]="selectedMeal.calories">
    </div>
    <button type="button" class="btn btn-default" (click)="doneEditing()">Done Editing</button>
  </form>
  `
})

export class MealEditComponent{
  @Input() selectedMeal: Meal;
  @Output() doneClickSender = new EventEmitter();
  doneEditing(){
    this.doneClickSender.emit();
  }
}
