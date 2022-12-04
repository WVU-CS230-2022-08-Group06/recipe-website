import { Component, OnInit } from '@angular/core';
import { RecipeCardModel } from '../cards/recipe-card.model';
import { ProductsService } from '../products-service';

@Component({
  selector: 'app-lunch-recipes',
  templateUrl: './lunch-recipes.component.html',
  styleUrls: ['./lunch-recipes.component.css']
})
export class LunchRecipesComponent implements OnInit {

  lunchRecipes: RecipeCardModel[] =[]
  constructor(private productsService: ProductsService) { }

  ngOnInit(): void {
    this.productsService.getProducts().subscribe((data: RecipeCardModel[])=> 
    {console.log("Fetching products");
    for(var product of data) {
      //console.log(product);
      // perhaps for low calorie and quick meals
      // simply check first that product.cals <= 500 && (product.prepTime + product.cookTime) <= 30 mins
      if (product.category == "Lunch") {
      this.lunchRecipes.push(product);
      }
      else {
        continue;
      }
    }
  })
  }

}
