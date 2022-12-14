import { Component, Input, OnInit } from '@angular/core';

import { ProductsService } from 'src/app/products-service';
import { CardsComponent } from '../cards.component';
import { RecipeCardModel } from '../recipe-card.model';
import { Router, ActivatedRoute, ParamMap, Route } from '@angular/router';

@Component({
  selector: 'app-full-recipe',
  templateUrl: './full-recipe.component.html',
  styleUrls: ['./full-recipe.component.css']
})
export class FullRecipeComponent   implements OnInit {
@Input() rName: string;
@Input() rPic: string;
@Input() rStyle: string;
@Input() rSteps: string;
@Input() rMeal: string;
@Input() rDesc: string;
@Input() rIngred: string;
@Input() prep: number;
@Input() cook: number;
@Input() user: string;
@Input() savedBy: string;
@Input() canDelete: string;
@Input() firstHalf: string;

  savedRecipes: RecipeCardModel[] =[]
  ingredients: string[] =[]
  constructor(private route: ActivatedRoute, private ps: ProductsService, private router: Router) { 
  this.rName = "Buttered Noodles";
  this.rMeal = "blank";
  this.rPic = "blank";
  this.rSteps = "blank";
  this.rStyle = "blank";
  this.rDesc = "blank";
  this.rIngred = "blank";
  this.prep = 0;
  this.cook = 0;
  this.user = "none"
  this.savedBy = "";
  this.canDelete = "false";
  this.firstHalf = "";
  }
 
  // to display a full recipe, the info needs to match the recipe card it came from
  // to do this, we need to accept info being passed from the recipe cards via a route
  // below, we take a snapshot of this info to display it fully
   ngOnInit(): void {
    this.rName = this.route.snapshot.params['nameToPass'];
    this.rMeal = this.route.snapshot.params['mealToPass'];
    this.rIngred = this.route.snapshot.params['ingredToPass'];
    this.rDesc = this.route.snapshot.params['descToPass'];
    this.rStyle = this.route.snapshot.params['styleToPass'];
    this.rSteps = this.route.snapshot.params['stepsToPass'];
    this.rPic = this.route.snapshot.params['picToPass'];
    this.prep = this.route.snapshot.params['prepToPass'];
    this.cook = this.route.snapshot.params['cookToPass'];
    this.user = this.route.snapshot.params['userToPass'];
    this.savedBy = this.route.snapshot.params['saveToPass'];
    this.canDelete = this.route.snapshot.params['deleteToPass'];
    
    this.ingredients = this.rIngred.split(",");
    var first = this.rSteps.substring(this.rSteps.length / 2);
    var index = first.indexOf(".");
    this.firstHalf = this.rSteps.substring(0, index + 1 + (this.rSteps.length / 2));

}

  


// this method will be called if a user decides to save a recipe
// we create our product with the attributes, then call our service method
// ultimately, this adds it to the "savedrecipes" list in our database

saveRecipe() {
  let product = new RecipeCardModel(this.rPic, this.rDesc, this.rName, this.rIngred, this.rStyle, 
    this.rMeal, this.rSteps, "", this.cook, this.prep, this.user, localStorage.getItem('userEmail')!);
    this.ps.addSavedRecipes(product);
    alert("Recipe saved to your profile!");
    window.location.reload();
}

// this method needs to return true in order for the "Save Recipe" button to appear
// we want to make sure a user hasn't already saved the recipe being looked at
// in order to do so, we look at the name of the recipe and who it was liked by

recipeNotSaved(): Boolean {
  this.ps.getSavedRecipes().subscribe((data: RecipeCardModel[])=> 
    {
    for(var product of data) {
      this.savedRecipes.push(product);
    }
  });


  /*
  To determine if a user has saved a recipe, we check 2 things:
  1) The recipe names are the same
  2) The recipe was saved by the current user logged in
  */
  for (var product of this.savedRecipes) {
      if (product.recipeName == this.rName && product.savedBy == localStorage.getItem('userEmail')) {
        return false;
      }
  }
  return true;
  
}

// similar to the save recipes button, we need to check if a recipe has been saved by a user
// if so, we grant them the option to unsave the recipe
// IMPORTANT: the code is designed such that the only time this method is true is on the "SavedRecipes" component
// this way, for simplicity, a user can only delete recipes from that specific page 
toDelete(): Boolean {
  if (this.canDelete == "true") {
    return true;
  }
  else {
    return false;
  }

}

/*
This method is called when we want to delete (unsave) a recipe
This method is called when a user hits the "Unsave Recipe" button
*/

deleteRecipe() {
  let product = new RecipeCardModel(this.rPic, this.rDesc, this.rName, this.rIngred, this.rStyle, 
    this.rMeal, this.rSteps, "", this.cook, this.prep, this.user, localStorage.getItem('userEmail')!);
    this.ps.removeSavedRecipe(product);
    alert("Recipe is no longer saved.");
    this.router.navigate(['/SavedRecipes']);
}


}







