import { Component, OnInit } from '@angular/core';
import { fakeAsync } from '@angular/core/testing';
import { Form, NgForm } from '@angular/forms';
import { throwError } from 'rxjs';
import { RecipeCardModel } from '../cards/recipe-card.model';
import { ProductsService } from '../products-service';

@Component({
  selector: 'app-request-form',
  templateUrl: './request-form.component.html',
  styleUrls: ['./request-form.component.css']
})
export class RequestFormComponent implements OnInit {

  values = '';
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


  

  // this method needs to examine if we can add requested recipe to home page
  // we need to check 2 things:
  // 1: the given recipe name exists already
  // 2: the given recipe doesn't already exist in requested recipes display
  submitRequest(form: NgForm) {
    if (this.verifyRecipeExists().recipeName != "fake" && this.verifyNotDisplayed()) {
      this.productsService.addRequestedProducts(this.verifyRecipeExists());
      alert("Successful recommendation!");
      
      form.reset();
     
    }
    else {
      alert("Recipe doesn't exist or has already been recommended.");
      form.reset();
    }
  }

  verifyRecipeExists(): RecipeCardModel {
  var answer = document.getElementById('requestName') as HTMLInputElement | null;
  for (var product of this.examineRecipes) {
    if (product.recipeName == answer?.value) {
      return product;
    }
  }
  this.examineRecipes[0].recipeName = "fake";
  return this.examineRecipes[0];
  
  
  
  }
  verifyNotDisplayed() : boolean {
    var answer = document.getElementById('requestName') as HTMLInputElement | null;
    for (var product of this.examineRecipes2) {
      if (product.recipeName == answer?.value) {
        return false;
      }
    }
    return true;
  }

  
  

}
