import {  NgModule  } from '@angular/core';
import {  BrowserModule } from '@angular/platform-browser';
import {  FormsModule  } from '@angular/forms';
import {  MealListComponent } from './meal-list.component';
import {  AppComponent  } from './app.component';
import {  CalorieTotalComponent } from './calorie-total.component';
import {  CalorieAverageComponent } from './calorie-average.component';
import {  MealEditComponent } from './meal-edit.component';
import {  MealAddComponent  } from './meal-add.component';
import {  CaloriePipe } from './calorie.pipe';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    MealListComponent,
    CalorieTotalComponent,
    CalorieAverageComponent,
    MealEditComponent,
    MealAddComponent,
    CaloriePipe
  ],
  bootstrap: [AppComponent]
})

export class AppModule {  }
