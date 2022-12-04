import { Component, OnInit } from '@angular/core';
import { Form, FormGroup, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { RecipeCardModel } from '../cards/recipe-card.model';

import { ProductsService } from '../products-service';

@Component({
  selector: 'app-add-recipe',
  templateUrl: './add-recipe.component.html',
  styleUrls: ['./add-recipe.component.css']
})
export class AddRecipeComponent implements OnInit {

  constructor(private ps: ProductsService, private router: Router) { }

  ngOnInit(): void {
  }

  

  addRecipe(product: RecipeCardModel, form: NgForm): void {
    console.log("HELLO");
    console.log(product);
    if (this.validate(form)) {
      this.ps.addProducts(product);
      form.reset();
      this.router.navigate(['']);
      
    }
    //this.ps.addProducts(product);
    
  }
  validate(x: NgForm): boolean {
    if (x.valid) {
      alert("Upload successful");

      //x.reset();
      return true;
    }
    return false;
  }


}
