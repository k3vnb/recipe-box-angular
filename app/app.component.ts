import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="container">
     <h1>To Do List for {{month}}/{{day}}/{{year}}</h1>
     <h3>{{currentFocus}}</h3>

     <ul>
       <li *ngFor="let currentRecipe of Recipes">{{currentRecipe.title}}
        <ul><li>{{currentRecipe.ingredients}}</li><li>{{currentRecipe.instructions}}</li></ul></li>

     </ul>

   </div>
  `
})

export class AppComponent {
  currentFocus: string = 'Recipes';
  currentTime = new Date();
  month: number = this.currentTime.getMonth() + 1;
  day: number = this.currentTime.getDate();
  year: number = this.currentTime.getFullYear();
  Recipes: Recipe[] = [
    new Recipe('Inarizushi', 'rice, inari, fillings/toppings', 'Put it together.'),
    new Recipe('Onigirazu','rice, seaweed, filling','put together'),
    new Recipe('Temarizushi','rice, topping','put together')
  ];
}

export class Recipe {
  public done: boolean = false;
   constructor(
    public title: string,
    public ingredients: string,
    public instructions: string
  ) { }
}
