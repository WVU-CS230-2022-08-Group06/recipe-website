import { Component, OnInit } from '@angular/core';
import { RecipeCardModel } from '../cards/recipe-card.model';
import { ProductsService } from '../products-service';

@Component({
  selector: 'app-chinese-recipes',
  templateUrl: './chinese-recipes.component.html',
  styleUrls: ['./chinese-recipes.component.css']
})
export class ChineseRecipesComponent implements OnInit {


  chineseRecipes: RecipeCardModel[] =[]
  constructor(private productsService: ProductsService) { }

  ngOnInit(): void {
    this.productsService.getProducts().subscribe((data: RecipeCardModel[])=> 
    {console.log("Fetching products");
    for(var product of data) {
      //console.log(product);
      // perhaps for low calorie and quick meals
      // simply check first that product.cals <= 500 && (product.prepTime + product.cookTime) <= 30 mins
      if (product.style == "Chinese") {
      this.chineseRecipes.push(product);
      }
      else {
        continue;
      }
    }
  })
  }

}
