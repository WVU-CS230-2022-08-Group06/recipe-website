import { Component, OnInit } from '@angular/core';
import { RecipeCardModel } from '../cards/recipe-card.model';
import { ProductsService } from '../products-service';

@Component({
  selector: 'app-saved-recipes',
  templateUrl: './saved-recipes.component.html',
  styleUrls: ['./saved-recipes.component.css']
})
export class SavedRecipesComponent implements OnInit {

  mySavedRecipes: RecipeCardModel[] =[]
  constructor(private productsService: ProductsService) { }

  ngOnInit(): void {
    this.productsService.getSavedRecipes().subscribe((data: RecipeCardModel[])=> 
    {
    for(var product of data) {
      if (product.savedBy == localStorage.getItem('userEmail')) {
        this.mySavedRecipes.push(product);
      }
      
    }
  })

  }






  searchText: string = '';
  

  onSearchTextEntered(searchValue: string) {
    this.searchText = searchValue;
  }

}
