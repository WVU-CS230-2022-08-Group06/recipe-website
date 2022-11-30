import { Component, OnInit } from '@angular/core';
import { Form, FormGroup, NgForm } from '@angular/forms';
import { RecipeCardModel } from '../cards/recipe-card.model';

import { ProductsService } from '../products-service';

@Component({
  selector: 'app-add-recipe',
  templateUrl: './add-recipe.component.html',
  styleUrls: ['./add-recipe.component.css']
})
export class AddRecipeComponent implements OnInit {

  constructor(private ps: ProductsService) { }

  ngOnInit(): void {
  }

  

  addRecipe(product: RecipeCardModel) {
    console.log("HELLO");
    this.ps.addProducts(product);
    
  }
  validate(x: NgForm): boolean {
    if (x.valid) {
      alert("Upload successful");
      x.reset();
      return true;
    }
    return false;
  }

  addAmericanRecipe(product: RecipeCardModel)
  {
    this.ps.addAmericanProducts(product);
  }
  addKoreanRecipe(product: RecipeCardModel)
  {

  }
  addMexicanRecipe(product: RecipeCardModel)
  {

  }
  addIndianRecipe(product: RecipeCardModel)
  {

  }
  addChineseRecipe(product: RecipeCardModel)
  {

  }

}
