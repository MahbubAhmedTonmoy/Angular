import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { DropdownDirective } from './shared/dropdown.directive';
import { RecipeService } from './services/recipe.service';
import { ShoppingListService } from './services/shoppingList.service';
import { AppRoutingModule } from './app-routing.module';
import { AuthComponent } from './Auth/auth.component';
import { AuthService } from './services/auth.service';
import { AuthInterceptorService } from './Auth/auth.interceptor.service';
import { RecipesModule } from './recipes/recipe.module';
import { ShoppingListModule } from './shopping-list/shoppinglist.module';
import { SharedModule } from './shared/shared.module';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    //DropdownDirective,
    AuthComponent
  ],
  imports: [
    // BrowserModule,
    // FormsModule,
    // ReactiveFormsModule,
    // HttpClientModule,
    // AppRoutingModule,
    RecipesModule,
    ShoppingListModule,
    SharedModule
  ],
  providers: [
    RecipeService,
    ShoppingListService,
    AuthService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
