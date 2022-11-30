import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddRecipeComponent } from './add-recipe/add-recipe.component';
import { AllRecipesComponent } from './all-recipes/all-recipes.component';
import { AmericanRecipesComponent } from './american-recipes/american-recipes.component';
import { BeefRecipesComponent } from './beef-recipes/beef-recipes.component';
import { CardsComponent } from './cards/cards.component';
import { FullRecipeComponent } from './cards/full-recipe/full-recipe.component';


import { ExpandRecipeComponent } from './expand-recipe/expand-recipe.component';
import { HomeLayoutComponent } from './home-layout/home-layout.component';
import { KoreanRecipesComponent } from './korean-recipes/korean-recipes.component';

import { RecipePageComponent } from './recipe-page/recipe-page.component';


import { UserLoginComponent } from './user-login/user-login.component';
import { UserPageComponent } from './user-page/user-page.component';
import { UserSignComponent } from './user-sign/user-sign.component';

const routes: Routes = [ {
  path: 'UserLoginComponent',
  component: UserLoginComponent
}
, {
  path: '' ,
  component: HomeLayoutComponent
}
, {
  path: 'UserSignComponent' ,
  component: UserSignComponent
},
{
  path: 'BeefRecipesComponent', 
  component: BeefRecipesComponent
},
{
  path: 'CardsComponent',
  component: CardsComponent
},
{
  path: 'ExpandRecipeComponent',
  component: ExpandRecipeComponent
},
{
  path: 'RecipePageComponent',
  component: RecipePageComponent
},
{
  path: 'UserPageComponent',
  component: UserPageComponent
},
{
  path: 'AddRecipeComponent',
  component: AddRecipeComponent
},
{
  path: 'RecipePageComponent',
  component: RecipePageComponent
},
{
  path: 'FullRecipeComponent',
  component: FullRecipeComponent
},
{
  path: 'AmericanRecipes',
  component: AmericanRecipesComponent
},
{
  path: 'KoreanRecipes',
  component: KoreanRecipesComponent
},
{
  path: 'AllRecipes',
  component: AllRecipesComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
