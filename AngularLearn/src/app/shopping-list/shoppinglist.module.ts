import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { AppRoutingModule } from '../app-routing.module';
import { ShoppingListComponent } from './shopping-list.component';
import { ShoppingEditComponent } from './shopping-edit/shopping-edit.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    ShoppingListComponent,
    ShoppingEditComponent
  ],
  imports: [
    SharedModule
  ],
  exports: [
    ShoppingListComponent,
    ShoppingEditComponent
  ],
})
export class ShoppingListModule { }
