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
 

 cards$ : RecipeCardModel[] =[];
  constructor( private router: Router)
   { 
    
  this.recipePicture = "/assets/image/pic1.png";
  this.desc = "missing description";
  this.recipeName = "none";
  this.theStyle = "None";
  this.category = "None";
  this.recipeIngredients = "missing ingredients";
  this.recipeSteps = "missing steps"
  this.recom = "";
  this.prepTime = 0;
  this.cookTime = 0;
  this.user = "none";
  this.save = "";
  this.canDelete = "false";
  }

  ngOnInit(): void {
    
  }

  // when the "start cooking" button is selected on a card:
  // we call this navigate method:
  // we use an object to store all of our data attributes of a recipe
  // we pass this data through a route to FullRecipeComponent
  navigate() {
      const data = {
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
    
    this.router.navigate(['FullRecipeComponent', data]);
  }


}
