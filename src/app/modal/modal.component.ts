import { Component, OnInit } from '@angular/core';
import { RecipeCardModel } from '../cards/recipe-card.model';
import { ProductsService } from '../products-service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  examineRecipes : RecipeCardModel[] =[]
  examineRecipes2: RecipeCardModel[] =[]
  constructor(private productsService: ProductsService) { }

  ngOnInit(): void {
    this.productsService.getProducts().subscribe((data: RecipeCardModel[])=> 
    {console.log("Fetching products");
    for(var product of data) {
      
      this.examineRecipes.push(product);
    }
   
  })

  this.productsService.getRequestedProducts().subscribe((data: RecipeCardModel[])=> 
  {console.log("Fetching products");
  for(var product of data) {
    
    this.examineRecipes2.push(product);
  }
 
})
  }

  buttonClick() {
    console.log("HELLLLLOOO");
    if (this.verifyNotDisplayed()) {
        if (this.verifyRecipeExists().recipeName != "00") {
          var answer = document.getElementById('recipient-name') as HTMLInputElement | null
          this.verifyRecipeExists().recommend = "Recommended by: " + answer?.value;
          this.productsService.addRequestedProducts(this.verifyRecipeExists());
          alert("Successful recommendation!");
        }
        else {
          alert("Recipe with the name given does not exist.");
        }
    }
    else {
      alert("Recipe has already been recommended.");
    }
  }

  verifyNotDisplayed() : boolean {
    var answer = document.getElementById('recipeName') as HTMLInputElement | null;
    for (var product of this.examineRecipes2) {
      if (product.recipeName == answer?.value) {
        return false;
      }
    }
    return true;
  }

  verifyRecipeExists(): RecipeCardModel {
    var answer = document.getElementById('recipeName') as HTMLInputElement | null;
    for (var product of this.examineRecipes) {
      if (product.recipeName == answer?.value) {
        return product;
      }
    }
    this.examineRecipes[0].recipeName = "00";
    return this.examineRecipes[0];
    
    
    
    }





}


