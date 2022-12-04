import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddRecipeComponent } from './add-recipe/add-recipe.component';
import { AllRecipesComponent } from './all-recipes/all-recipes.component';
import { AmericanRecipesComponent } from './american-recipes/american-recipes.component';
import { AuthComponent } from './auth/auth.component';

import { BfastRecipesComponent } from './bfast-recipes/bfast-recipes.component';
import { CardsComponent } from './cards/cards.component';
import { FullRecipeComponent } from './cards/full-recipe/full-recipe.component';
import { ChineseRecipesComponent } from './chinese-recipes/chinese-recipes.component';
import { DessertRecipesComponent } from './dessert-recipes/dessert-recipes.component';
import { DinnerRecipesComponent } from './dinner-recipes/dinner-recipes.component';



import { HomeLayoutComponent } from './home-layout/home-layout.component';
import { IndianRecipesComponent } from './indian-recipes/indian-recipes.component';
import { KoreanRecipesComponent } from './korean-recipes/korean-recipes.component';
import { LunchRecipesComponent } from './lunch-recipes/lunch-recipes.component';
import { MexicanRecipesComponent } from './mexican-recipes/mexican-recipes.component';


import { RequestFormComponent } from './request-form/request-form.component';


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

{path: 'CardsComponent', component: CardsComponent,
children: [{path: ':name', component: FullRecipeComponent}]},

{path: 'RequestRecipe', component: RequestFormComponent},

{
  path: 'UserPageComponent',
  component: UserPageComponent
},
{
  path: 'AddRecipeComponent',
  component: AddRecipeComponent
},

{
  path: 'FullRecipeComponent',
  component: FullRecipeComponent, data: {recipeName: 'blank'}
  
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
},
{
  path: 'BreakfastRecipes',
  component: BfastRecipesComponent
},
{
  path: 'MexicanRecipes',
  component: MexicanRecipesComponent
},
{
  path: 'IndianRecipes',
  component: IndianRecipesComponent
},
{
  path: 'ChineseRecipes',
  component: ChineseRecipesComponent
},
{
  path: 'LunchRecipes',
  component: LunchRecipesComponent
},
{
  path: 'DinnerRecipes',
  component: DinnerRecipesComponent
},
{
  path: 'DessertRecipes',
  component: DessertRecipesComponent
},
{path: 'Login', component: AuthComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
