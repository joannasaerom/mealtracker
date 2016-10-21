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
          [caloriesTotal]="totalCalories"
          (calorieTotalSender)="calculateTotal($event)"
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
    new Meal("Test", "test", 500),
    new Meal("test", "test", 200),
    new Meal("Test", "test", 800),
    new Meal("test", "test", 499)
  ];
  selectedMeal: Meal = null;
  editMeal(clickedMeal: Meal){
    this.selectedMeal = clickedMeal;
  }
  finishedEditing(){
    this.selectedMeal = null;
  }
  // caloriesList: number[];
  addMeal(addedMeal: Meal){
    this.meals.push(addedMeal);
    // this.caloriesList.push(addedMeal.calories);
  }

  // public totalCalories: number;
  // calculateTotal(caloriesList: number[]){
  //   for (let calorie of this.caloriesList){
  //     this.totalCalories += calorie;
  //     return this.totalCalories;
  //     console.log(totalCalories);
  //   }
  // }
}
