import { Component, OnInit } from '@angular/core';
import { RecipeCardModel } from '../cards/recipe-card.model';
import { ProductsService } from '../products-service';

@Component({
  selector: 'app-pasta',
  templateUrl: './pasta.component.html',
  styleUrls: ['./pasta.component.css']
})
export class PastaComponent implements OnInit {

  pasta: RecipeCardModel[] =[]
  constructor(private productsService: ProductsService) { }

  ngOnInit(): void {
    this.productsService.getProducts().subscribe((data: RecipeCardModel[])=> 
    {console.log("Fetching products");
    for(var product of data) {
      //console.log(product);
      // perhaps for low calorie and quick meals
      // simply check first that product.cals <= 500 && (product.prepTime + product.cookTime) <= 30 mins
      if (product.ingredients.includes("pasta") || product.ingredients.includes("rigatoni") || 
      product.ingredients.includes("spaghetti") || product.ingredients.includes("alfredo")) {
      this.pasta.push(product);
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
