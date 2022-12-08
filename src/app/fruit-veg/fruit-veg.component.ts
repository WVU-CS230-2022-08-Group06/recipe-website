import { Component, OnInit } from '@angular/core';
import { RecipeCardModel } from '../cards/recipe-card.model';
import { ProductsService } from '../products-service';

@Component({
  selector: 'app-fruit-veg',
  templateUrl: './fruit-veg.component.html',
  styleUrls: ['./fruit-veg.component.css']
})
export class FruitVegComponent implements OnInit {

  fruits: RecipeCardModel[] =[]
  constructor(private productsService: ProductsService) { }

  ngOnInit(): void {
    this.productsService.getProducts().subscribe((data: RecipeCardModel[])=> 
    {console.log("Fetching products");
    for(var product of data) {
      //console.log(product);
      // perhaps for low calorie and quick meals
      // simply check first that product.cals <= 500 && (product.prepTime + product.cookTime) <= 30 mins
      if (product.ingredients.includes("pepper") || product.ingredients.includes("broccoli")  ||
      product.ingredients.includes("potato") || product.ingredients.includes("apple") ||
      product.ingredients.includes("tomato") || product.ingredients.includes("avocado")) {
      this.fruits.push(product);
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
