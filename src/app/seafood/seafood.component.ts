import { Component, OnInit } from '@angular/core';
import { RecipeCardModel } from '../cards/recipe-card.model';
import { ProductsService } from '../products-service';

@Component({
  selector: 'app-seafood',
  templateUrl: './seafood.component.html',
  styleUrls: ['./seafood.component.css']
})
export class SeafoodComponent implements OnInit {

  seafood: RecipeCardModel[] = []
  constructor(private productsService: ProductsService) { }

  ngOnInit(): void {
    this.productsService.getProducts().subscribe((data: RecipeCardModel[])=> 
    {console.log("Fetching products");
    for(var product of data) {
      //console.log(product);
      // perhaps for low calorie and quick meals
      // simply check first that product.cals <= 500 && (product.prepTime + product.cookTime) <= 30 mins
      if (product.ingredients.includes("fish") || product.ingredients.includes("shrimp") || 
      product.ingredients.includes("lobster") || product.ingredients.includes("crab") ||
      product.ingredients.includes("salmon")) {
      this.seafood.push(product);
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
