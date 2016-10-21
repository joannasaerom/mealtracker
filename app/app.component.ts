import {  Component } from '@angular/core';
import {  Meal  } from './meal.model';



@Component({
  selector: 'my-app',
  template: `
  <div class="container">
    <div class=row>
    <h1>Meal Tracker</h1>
      <div class="col-md-6">
        <meal-list
        [mealList]="meals"
        (clickSender)="editMeal($event)"
        ></meal-list>
      </div>
      <div class="col-md-6">
        <calorie-total
        [caloriesTotal]="totalCalories"
        (calorieTotalSender)="calculateTotal($event)"
        ></calorie-total>
        <calorie-average

        ></calorie-average>
        <edit-form
        [selectedMeal]="selectedMeal"
        (doneClickSender)="finishedEditing()"
        ></edit-form>
        <add-form
        (newMealSender)="addMeal($event)"
        ></add-form>
      </div>
    </div>
  </div>
  `
})

export class AppComponent {
  public meals: Meal[] = [
    new Meal("Test", "test", 300),
    new Meal("Test2", "test", 400),
    new Meal("Test3", "test", 550)
  ];
  selectedMeal: Meal = this.meals[0];
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
