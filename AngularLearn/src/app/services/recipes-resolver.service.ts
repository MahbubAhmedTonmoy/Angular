
import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { Recipe } from "../recipes/recipe.model";
import { DataStorageService } from "./data-storage.service";

@Injectable(
)
export class RecipesResolverService implements Resolve<Recipe[]>{

    constructor(private ds : DataStorageService){}

    resolve(route: ActivatedRouteSnapshot,
         state: RouterStateSnapshot): 
                Recipe[] | Observable<Recipe[]> | Promise<Recipe[]> {
        return this.ds.fetchRecipes();
    }
    
}