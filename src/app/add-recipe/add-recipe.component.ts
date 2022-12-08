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

  public map: Map<RecipeCardModel, String> = new Map();
  constructor(private ps: ProductsService, private router: Router) { }

  ngOnInit(): void {
  }

  

  addRecipe(product: RecipeCardModel, form: NgForm): void {
    
    if (this.validate(form)) {
      this.ps.addRequestedRecipes(product);

      form.reset();
      if (localStorage.getItem('moderatorEmail') == "haughtluka256@gmail.com") {
        this.router.navigate(['/Mod']);
      }
      else {
      this.router.navigate(['/Home']);
      }
      
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
