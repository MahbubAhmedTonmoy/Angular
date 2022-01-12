import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { exhaustMap } from "rxjs-compat/operator/exhaustMap";
import { map, tap,take } from "rxjs/operators";
import { Recipe } from "../recipes/recipe.model";
import { AuthService } from "./auth.service";
import { RecipeService } from "./recipe.service";

@Injectable({
    providedIn: 'root'
})
export class DataStorageService{

    constructor(private http: HttpClient,
         private recipeService : RecipeService,
         private auth : AuthService){

    }

    storeRecipes(){
        const recipes = this.recipeService.getRecipes();
        this.http.put('https://mahbubangular-default-rtdb.firebaseio.com/recipes.json',
            recipes)
            .subscribe(response => {
                console.log(response);
            })
    }

    fetchRecipes(){
        return this.http.get<Recipe[]>('https://mahbubangular-default-rtdb.firebaseio.com/recipes.json')
        .pipe(map(
            recipes => {
                return recipes.map(recipe => {
                    return {...recipe, items: recipe.items ? recipe.items :[]}
                });
            }
        ), 
        tap( recipes => {
            this.recipeService.setRecipes(recipes);
        }))
    }
}