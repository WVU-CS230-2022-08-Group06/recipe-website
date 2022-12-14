import { Component, OnInit, Input } from '@angular/core';
import { validateEventsArray } from '@angular/fire/compat/firestore';
import { Route, RouterLink, RouterLinkActive } from '@angular/router';
import { HomeLayoutComponent } from '../home-layout/home-layout.component';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { RecipeCardModel } from './recipe-card.model';
import { ProductsService } from '../products-service';
import { FullRecipeComponent } from './full-recipe/full-recipe.component';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
  /*
  These are all of the characteristics of a recipe!
  Only a select few are displayed on the card itself
  The majority are displayed when a user opens up the full recipe itself
  "canDelete" is always set to false initially as a recipe has yet to be saved
  */
 @Input() recipePicture: string;
 @Input() desc:string;
 @Input() recipeName: string;
 @Input() theStyle: string;
 @Input() category: string;
 @Input() recipeSteps: string;
 @Input() recipeIngredients: string;
 @Input() recom: string;
 @Input() cookTime: number;
 @Input() prepTime: number;
 @Input() user: string;
 @Input() save: string;
 @Input() canDelete: string;
 
  constructor( private router: Router)
   { 
  this.recipePicture = "/assets/image/pic1.png";
  this.desc = "";
  this.recipeName = "";
  this.theStyle = "";
  this.category = "";
  this.recipeIngredients = "";
  this.recipeSteps = ""
  this.recom = "";
  this.prepTime = 0;
  this.cookTime = 0;
  this.user = "";
  this.save = "";
  this.canDelete = "false";
  }

  ngOnInit(): void {
  }

  // when the "start cooking" button is selected on a card:
  // we call this navigate method:
  // we use an object to store all of our data attributes of a recipe
  // we pass this data through a route to FullRecipeComponent
  // this method is VERY important as it allows each recipe card to have a unique route
  navigate() {
      const data = {
        // properties are set equal to card inputs
        nameToPass: this.recipeName,
        picToPass: this.recipePicture,
        descToPass: this.desc,
        styleToPass: this.theStyle,
        mealToPass: this.category,
        stepsToPass: this.recipeSteps,
        ingredToPass: this.recipeIngredients,
        cookToPass: this.cookTime,
        prepToPass: this.prepTime,
        userToPass: this.user,
        saveToPass: this.save,
        deleteToPass: this.canDelete
      };
    
      // after we retrieve all of the data from the card, we pass it as a parameter
      // we then navigate to the FullRecipeComponent (displays entire recipe)
      // FullRecipeComponent accesses "data" to grab the info!
    this.router.navigate(['FullRecipeComponent', data]);
  }


}
