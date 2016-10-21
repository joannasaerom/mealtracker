import { Pipe, PipeTransform } from '@angular/core';
import { Meal } from './meal.model';

@Pipe({
  name: 'mealTime',
  pure: false
})

export class MealTimePipe implements PipeTransform {
  transform(input: Meal[], selectedMealTime){
    var output: Meal[] = [];
    if (selectedMealTime === "Breakfast"){
      for (var i = 0; i < input.length; i++){
        if(input[i].mealTime === "Breakfast"){
          output.push(input[i]);
        }
      }
      return output;
    } else if(selectedMealTime === "Lunch"){
      for (var i = 0; i < input.length; i++){
        if(input[i].mealTime === "Lunch"){
          output.push(input[i]);
        }
      }
      return output;
    } else if (selectedMealTime === "Dinner"){
      for (var i = 0; i < input.length; i++){
        if(input[i].mealTime === "Dinner"){
          output.push(input[i]);
        }
      }
      return output;
    } else if (selectedMealTime === "Snack"){
      for (var i = 0; i < input.length; i++){
        if(input[i].mealTime === "Snack"){
          output.push(input[i]);
        }
      }
      return output;
    } else{
      return input;
    }
  }
}
