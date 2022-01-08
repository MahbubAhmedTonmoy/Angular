import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { RecipeService } from 'src/app/services/recipe.service';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipe: Recipe;
  id : number;
  constructor(private recipeService:RecipeService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    //const id = this.route.snapshot.params['id'];
    this.route.params.subscribe(
      (params : Params) => {
        this.id =+params['id']; 
        this.recipe = this.recipeService.getRecipeById(this.id);
      }
    )
  }
  AddtoShoppingList(){
    this.recipeService.addItemsToShoppingList(this.recipe.items);
  }
  onEditRecipe(){
    this.router.navigate(['edit'],{relativeTo: this.route})
  }
}