import {
  Component,
  OnInit,
  ViewChild,
  OnDestroy
} from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { ShoppingListService } from '../../services/shoppingList.service';

import { Ingredient } from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {

  @ViewChild('f', { static: false }) shoppingListForm: NgForm;
  subscription : Subscription;
  editMode = false;
  editedItemid: number;
  editedItem : Ingredient;
  constructor( private slService: ShoppingListService) { }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  ngOnInit() {
    this.subscription = this.slService.itemEdit
      .subscribe(
        (index: number) => {
          this.editedItemid = index;
          this.editMode = true;
          this.editedItem = this.slService.getItemById(index);
          this.shoppingListForm.setValue({
            name: this.editedItem.name,
            amount: this.editedItem.amount
          })
        }
      );
  }

  onSubmmitItem(form : NgForm) {
    const value = form.value;
    const newIngredient = new Ingredient(value.name, value.amount);
    if(this.editMode){
      this.slService.updateIngredient(this.editedItemid,newIngredient);
    }
    else{
      this.slService.addItem(newIngredient);
    }
    this.editMode  = false;
    form.reset();
  }
  OnClear(){
    this.editMode  = false;
    this.shoppingListForm.resetForm();
  }
  onDelete(){
    this.slService.deleteIngredient(this.editedItemid);
    this.OnClear();
  }
}
