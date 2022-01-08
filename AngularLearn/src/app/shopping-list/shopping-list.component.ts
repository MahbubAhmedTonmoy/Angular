import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ShoppingListService } from '../services/shoppingList.service';

import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  items: Ingredient[];
  private itemAddSub: Subscription;
  constructor(private shoppingListService: ShoppingListService) { }
  ngOnDestroy(): void {
    this.itemAddSub.unsubscribe();
  }

  ngOnInit() {
    this.items = this.shoppingListService.getItems();
    this.itemAddSub = this.shoppingListService.itemAdd.subscribe(
      (items: Ingredient[]) =>{
        this.items = items;
      }
    );
  }

  onIngredientAdded(ingredient: Ingredient) {
    this.items.push(ingredient);
  }
  onEdititem(id: number){
    this.shoppingListService.itemEdit.next(id);
  }
}
