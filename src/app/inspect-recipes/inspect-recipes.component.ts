import { Component, OnInit } from '@angular/core';
import { RecipeCardModel } from '../cards/recipe-card.model';
import { ProductsService } from '../products-service';

@Component({
  selector: 'app-inspect-recipes',
  templateUrl: './inspect-recipes.component.html',
  styleUrls: ['./inspect-recipes.component.css']
})
export class InspectRecipesComponent implements OnInit {

  // array to hold all recipes from our "testing" list that holds uploaded recipes to be checked
  inspectRecipes: RecipeCardModel[] =[]
  
  constructor(private productsService: ProductsService) { }

  ngOnInit(): void {
    this.productsService.getRequestedRecipes().subscribe((data: RecipeCardModel[])=> 
    {console.log("Fetching products");
    for(var product of data) {
      this.inspectRecipes.push(product);
      
    }
  })

  }

  // this method is called if we decide a recipe is worth posting to our users
  // we add it to the "allrecipes" list, and then remove from "testing" list
  accept(product: RecipeCardModel) {
    this.productsService.addProducts(product),
    this.productsService.removeRequest(product);
    window.location.reload();
    
  }

  // in this case, we simply remove it and don't push to front-end
  reject(product: RecipeCardModel) {
    this.productsService.removeRequest(product);
    window.location.reload();
  }

}
