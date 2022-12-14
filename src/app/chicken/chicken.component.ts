import { Component, OnInit } from '@angular/core';
import { RecipeCardModel } from '../cards/recipe-card.model';
import { ProductsService } from '../products-service';

@Component({
  selector: 'app-chicken',
  templateUrl: './chicken.component.html',
  styleUrls: ['./chicken.component.css']
})
export class ChickenComponent implements OnInit {

  /*
  "chicken" is an array that will hold all recipes that contain chicken
  in the HTML file of this component, this array will be used to display all the chicken recipes
  */
  chicken: RecipeCardModel[] =[]
  constructor(private productsService: ProductsService) { }

  // we call a method from our products service
  // "getProducts" retrieves all accepted recipes
  ngOnInit(): void {
    this.productsService.getProducts().subscribe((data: RecipeCardModel[])=> 
    {
    for(var product of data) {
      // we check to see if chicken is one of the ingredients or simply in the recipe name
      // if so, we add it to our array
      if (product.ingredients.includes("chicken") || product.recipeName.includes("chicken")) {
      this.chicken.push(product);
      }
      // if it doesn't, we simply move on to the other recipes
      else {
        continue;
      }
    }
  })
  }

  // we initialize an empty string
  // will be used in the method below
  searchText: string = '';

  // this method is called to keep track of the changing search bar input
  // the search bar input will be equal to this method
  // method will take $event as a parameter
  onSearchTextEntered(searchValue: string) {
    this.searchText = searchValue;
  }

}
