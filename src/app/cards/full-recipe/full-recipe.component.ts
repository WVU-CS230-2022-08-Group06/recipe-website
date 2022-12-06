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
 
  constructor(private route: ActivatedRoute) { 
  this.rName = "blank";
  this.rMeal = "blank";
  this.rPic = "blank";
  this.rSteps = "blank";
  this.rStyle = "blank";
  this.rDesc = "blank";
  this.rIngred = "blank";
  this.prep = 0;
  this.cook = 0;
  }
 
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
}
}







