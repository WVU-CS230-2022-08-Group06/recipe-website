import { Component, OnInit } from '@angular/core';
import { RecipeCardModel } from '../cards/recipe-card.model';
import { ProductsService } from '../products-service';


@Component({
  selector: 'app-beef-recipes',
  templateUrl: './beef-recipes.component.html',
  styleUrls: ['./beef-recipes.component.css']
})
export class BeefRecipesComponent implements OnInit {

  beefRecipes: RecipeCardModel[] = []
  constructor(private productsService: ProductsService) { }

  ngOnInit(): void {
    this.productsService.getProducts().subscribe((data: RecipeCardModel[])=> 
    {console.log("Fetching products");
    for(var product of data) {
      console.log(product);
      this.beefRecipes.push(product);
    }
  })
  }



  addBeefRecipes() {
    
  }

}
