import { Component, OnInit } from '@angular/core';
import { RecipeCardModel } from '../cards/recipe-card.model';
import { ProductsService } from '../products-service';

@Component({
  selector: 'app-dessert-recipes',
  templateUrl: './dessert-recipes.component.html',
  styleUrls: ['./dessert-recipes.component.css']
})
export class DessertRecipesComponent implements OnInit {

  dessertRecipes: RecipeCardModel[] =[]
  constructor(private productsService: ProductsService) { }

  ngOnInit(): void {
    this.productsService.getProducts().subscribe((data: RecipeCardModel[])=> 
    {console.log("Fetching products");
    for(var product of data) {
      //console.log(product);
      // perhaps for low calorie and quick meals
      // simply check first that product.cals <= 500 && (product.prepTime + product.cookTime) <= 30 mins
      if (product.category == "Dessert") {
      this.dessertRecipes.push(product);
      }
      else {
        continue;
      }
    }
  })
  }

  searchText: string = '';
  

  onSearchTextEntered(searchValue: string) {
    this.searchText = searchValue;
  }

}
