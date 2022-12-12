import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddRecipeComponent } from './add-recipe/add-recipe.component';
import { AllRecipesComponent } from './all-recipes/all-recipes.component';
import { AmericanRecipesComponent } from './american-recipes/american-recipes.component';
import { AuthGuardService } from './auth/auth-guard.service';
import { AuthComponent } from './auth/auth.component';
import { ForgotPassComponent } from './auth/forgot-pass/forgot-pass.component';
import { ModeratorGuard } from './auth/moderator-guard';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { BeefComponent } from './beef/beef.component';


import { BfastRecipesComponent } from './bfast-recipes/bfast-recipes.component';
import { CardsComponent } from './cards/cards.component';
import { FullRecipeComponent } from './cards/full-recipe/full-recipe.component';
import { CarouselsComponent } from './carousels/carousels.component';
import { ChickenComponent } from './chicken/chicken.component';
import { ChineseRecipesComponent } from './chinese-recipes/chinese-recipes.component';
import { DessertRecipesComponent } from './dessert-recipes/dessert-recipes.component';
import { DinnerRecipesComponent } from './dinner-recipes/dinner-recipes.component';
import { FruitVegComponent } from './fruit-veg/fruit-veg.component';




import { HomeLayoutComponent } from './home-layout/home-layout.component';
import { IndianRecipesComponent } from './indian-recipes/indian-recipes.component';
import { InspectRecipesComponent } from './inspect-recipes/inspect-recipes.component';
import { KoreanRecipesComponent } from './korean-recipes/korean-recipes.component';
import { LunchRecipesComponent } from './lunch-recipes/lunch-recipes.component';
import { MexicanRecipesComponent } from './mexican-recipes/mexican-recipes.component';
import { ModalComponent } from './modal/modal.component';
import { ModeratorComponent } from './moderator/moderator.component';
import { PastaComponent } from './pasta/pasta.component';
import { QuickComponent } from './quick/quick.component';


import { RequestFormComponent } from './request-form/request-form.component';
import { SavedRecipesComponent } from './saved-recipes/saved-recipes.component';
import { SeafoodComponent } from './seafood/seafood.component';
import { TopNavBarComponent } from './top-nav-bar/top-nav-bar.component';




const routes: Routes = [ 
 {path: '' ,component: AuthComponent}
, 

{path: 'CardsComponent', component: CardsComponent,
children: [{path: ':name', component: FullRecipeComponent}]},

{path: 'RequestRecipe', component: RequestFormComponent, canActivate: [AuthGuardService]},

{
  path: 'AddRecipeComponent',
  component: AddRecipeComponent, canActivate: [AuthGuardService]
},

{
  path: 'FullRecipeComponent',
  component: FullRecipeComponent, data: {recipeName: 'blank'}, canActivate:[AuthGuardService]
  
},
{
  path: 'AmericanRecipes',
  component: AmericanRecipesComponent, canActivate: [AuthGuardService]
},
{
  path: 'KoreanRecipes',
  component: KoreanRecipesComponent, canActivate: [AuthGuardService]
},
{
  path: 'AllRecipes',
  component: AllRecipesComponent, canActivate: [AuthGuardService]
},
{
  path: 'BreakfastRecipes',
  component: BfastRecipesComponent, canActivate: [AuthGuardService]
},
{
  path: 'MexicanRecipes',
  component: MexicanRecipesComponent, canActivate: [AuthGuardService]
},
{
  path: 'IndianRecipes',
  component: IndianRecipesComponent, canActivate: [AuthGuardService]
},
{
  path: 'ChineseRecipes',
  component: ChineseRecipesComponent, canActivate: [AuthGuardService]
},
{
  path: 'LunchRecipes',
  component: LunchRecipesComponent, canActivate: [AuthGuardService]
},
{
  path: 'DinnerRecipes',
  component: DinnerRecipesComponent, canActivate: [AuthGuardService]
},
{
  path: 'DessertRecipes',
  component: DessertRecipesComponent, canActivate: [AuthGuardService]
},
{path: 'Home', component: HomeLayoutComponent, canActivate: [AuthGuardService]},
{path: 'SignUp', component: SignUpComponent},
{path: 'Quick', component: QuickComponent, canActivate: [AuthGuardService]},
{path: 'Seafood', component: SeafoodComponent, canActivate: [AuthGuardService]},
{path: 'Pasta', component: PastaComponent, canActivate: [AuthGuardService]},
{path: 'Chicken', component: ChickenComponent, canActivate: [AuthGuardService]},
{path: 'Fruits', component: FruitVegComponent, canActivate: [AuthGuardService]},
{path: 'Beef', component: BeefComponent, canActivate: [AuthGuardService]},
{path: 'Mod', component: ModeratorComponent, canActivate: [ModeratorGuard]},
{path: 'InspectRecipes', component: InspectRecipesComponent, canActivate: [ModeratorGuard]},
{path: 'Recover', component: ForgotPassComponent},
{path: 'SavedRecipes', component: SavedRecipesComponent, canActivate: [AuthGuardService]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
