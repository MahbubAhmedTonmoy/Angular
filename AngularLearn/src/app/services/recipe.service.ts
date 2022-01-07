import { Injectable } from "@angular/core";
import { EventEmitter } from "@angular/core";
import { Subject } from "rxjs";
import { Recipe } from "../recipes/recipe.model";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "./shoppingList.service";

@Injectable()
export class RecipeService{
    
    //selectedRecipe = new EventEmitter<Recipe>();
    //selectedRecipe = new Subject<Recipe>();
    private recipes: Recipe[] = [
        new Recipe('A Test Recipe', 
        'This is simply a test', 
        'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg',
        [
            new Ingredient('Meat',1),
            new Ingredient('French Fries', 20)
        ]),
        new Recipe('Another Test Recipe', 'This is simply a test', 
        'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg',
        [ 
            new Ingredient('Meat',1),
            new Ingredient('French Fries', 20)
        ])
      ];

      constructor(private sR : ShoppingListService){}
    getRecipes(){
        return this.recipes.slice();
    }
    addItemsToShoppingList(items: Ingredient[]){
      this.sR.addItems(items);
    }
    getRecipeById(id: number){
        return this.recipes[id];
    }
}