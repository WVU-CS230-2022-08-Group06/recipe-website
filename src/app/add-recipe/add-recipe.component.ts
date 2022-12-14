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
    
    if (this.validate(form)) {
      product.creatorName = localStorage.getItem('userEmail')!;
      this.ps.addRequestedRecipes(product);
      form.reset();
      if (localStorage.getItem('userEmail') == "haughtluka256@gmail.com") {
        this.router.navigate(['/Mod']);
      }
      else {
      this.router.navigate(['/Home']);
      }
      
    }
    
  }
  validate(x: NgForm): boolean {
    if (x.valid) {
      alert("Upload successful");

      //x.reset();
      return true;
    }
    return false;
  }

  cancel() {
    if (localStorage.getItem('userEmail') == "haughtluka256@gmail.com") {
      this.router.navigate(['/Mod']);
    }
    else {
      this.router.navigate(['/Home']);
    }
  }


}
