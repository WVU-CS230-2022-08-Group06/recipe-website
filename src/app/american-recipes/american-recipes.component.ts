import { Component, OnInit } from '@angular/core';
import { RecipeCardModel } from '../cards/recipe-card.model';
import { ProductsService } from '../products-service';

@Component({
  selector: 'app-american-recipes',
  templateUrl: './american-recipes.component.html',
  styleUrls: ['./american-recipes.component.css']
})
export class AmericanRecipesComponent implements OnInit {

  americanRecipes: RecipeCardModel[] = []
  constructor(private productsService: ProductsService) { }

  ngOnInit(): void {
    this.productsService.getAmericanProducts().subscribe((data: RecipeCardModel[])=> 
    {console.log("Fetching products");
    for(var product of data) {
      console.log(product);
      this.americanRecipes.push(product);
    }
  })
  }

}
