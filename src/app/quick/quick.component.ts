import { Component, OnInit } from '@angular/core';
import { RecipeCardModel } from '../cards/recipe-card.model';
import { ProductsService } from '../products-service';

@Component({
  selector: 'app-quick',
  templateUrl: './quick.component.html',
  styleUrls: ['./quick.component.css']
})
export class QuickComponent implements OnInit {

  quickRecipes: RecipeCardModel[] =[]
  constructor(private productsService: ProductsService) { }

  ngOnInit(): void {
    this.productsService.getProducts().subscribe((data: RecipeCardModel[])=> 
    {console.log("Fetching products");
    for(var product of data) {
      //console.log(product);
      // perhaps for low calorie and quick meals
      // simply check first that product.cals <= 500 && (product.prepTime + product.cookTime) <= 30 mins
      if ((product.prepTime + product.cookTime) <= 30) {
      this.quickRecipes.push(product);
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
