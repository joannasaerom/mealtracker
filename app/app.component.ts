import {  Component } from '@angular/core';
import {  Meal  } from './meal.model';

@Component({
  selector: 'my-app',
  template: `
  <div class="container">
    <div class=row>
    <h1>Meal Tracker</h1>
      <div class="col-md-6 col-md-offset-1">
        <meal-list
        [mealList]="meals"
        (clickSender)="editMeal($event)"
        ></meal-list>
      </div>
      <div class="col-md-5">
        <div class="displayCalories">
          <calorie-total
          [mealsConsumed]="meals"
          ></calorie-total>
          <calorie-average

          ></calorie-average>
        </div>
        <add-form
        (newMealSender)="addMeal($event)"
        ></add-form>
        <edit-form
        [selectedMeal]="selectedMeal"
        (doneClickSender)="finishedEditing()"
        ></edit-form>
      </div>
    </div>
  </div>
  `
})

export class AppComponent {
  public meals: Meal[] = [
    // new Meal("Test", "test", 500, "Breakfast"),
    // new Meal("test", "test", 200, "Lunch"),
    // new Meal("Test", "test", 800, "Dinner"),
    // new Meal("test", "test", 499, "Snack")
  ];
  selectedMeal: Meal = null;
  editMeal(clickedMeal: Meal){
    this.selectedMeal = clickedMeal;
  }
  finishedEditing(){
    this.selectedMeal = null;
  }
  addMeal(addedMeal: Meal){
    this.meals.push(addedMeal);
  }
}
