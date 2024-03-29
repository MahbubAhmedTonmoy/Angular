import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthComponent } from "./Auth/auth.component";
import { AuthGuard } from "./Auth/auth.guard";
import { RecipeDetailComponent } from "./recipes/recipe-detail/recipe-detail.component";
import { RecipeEditComponent } from "./recipes/recipe-edit/recipe-edit.component";
import { RecipeStartComponent } from "./recipes/recipe-start/recipe-start.component";
import { RecipesComponent } from "./recipes/recipes.component";
import { RecipesResolverService } from "./services/recipes-resolver.service";
import { ShoppingListComponent } from "./shopping-list/shopping-list.component";

const appRoutes : Routes = [
    {path:'', redirectTo:'/recipes', pathMatch:'full'},
    { path:'recipes', component: RecipesComponent,canActivate:[AuthGuard], children:[
        {path : '', component: RecipeStartComponent},
        {path:'new', component: RecipeEditComponent},
        {path:':id', component: RecipeDetailComponent},//, resolve:[RecipesResolverService]},
        {path:':id/edit', component: RecipeEditComponent}//, resolve:[RecipesResolverService]}
    ]},
    { path:'shoppinglist', component: ShoppingListComponent},
    {path:"auth", component: AuthComponent}
  ]
  
@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
      ],
    exports:[RouterModule]
})
export class AppRoutingModule{

}