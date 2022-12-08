import { Component, OnInit } from '@angular/core';
import { RecipeCardModel } from '../cards/recipe-card.model';
import { ProductsService } from '../products-service';

@Component({
  selector: 'app-korean-recipes',
  templateUrl: './korean-recipes.component.html',
  styleUrls: ['./korean-recipes.component.css']
})
export class KoreanRecipesComponent implements OnInit {

  koreanRecipes: RecipeCardModel[] =[]
  constructor(private productsService: ProductsService) { }

  ngOnInit(): void {
    this.productsService.getProducts().subscribe((data: RecipeCardModel[])=> 
    {console.log("Fetching products");
    for(var product of data) {
      //console.log(product);
      // perhaps for low calorie and quick meals
      // simply check first that product.cals <= 500 && (product.prepTime + product.cookTime) <= 30 mins
      if (product.style == "Korean") {
      this.koreanRecipes.push(product);
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
