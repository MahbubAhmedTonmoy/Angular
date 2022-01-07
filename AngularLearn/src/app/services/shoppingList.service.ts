import { Injectable } from "@angular/core";
import { EventEmitter } from "@angular/core";
import { Subject } from "rxjs";
import { Ingredient } from "../shared/ingredient.model";

export class ShoppingListService{

    //itemAdd = new EventEmitter<Ingredient[]>();
    itemAdd = new Subject<Ingredient[]>();
    private  items : Ingredient[] = [
        new Ingredient('Apples', 5),
        new Ingredient('Tomatoes', 10),
    ];
    getItems() {
      return this.items.slice();
    }

    addItem(item : Ingredient){
      this.items.push(item);
      //this.itemAdd.emit(this.items.slice());
      this.itemAdd.next(this.items.slice());
    }
    addItems(items : Ingredient[]){
      this.items.push(...items);
    }
}