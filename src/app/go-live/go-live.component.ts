import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { RecipeCardModel } from '../cards/recipe-card.model';
import { ProductsService } from '../products-service';

@Component({
  selector: 'app-go-live',
  templateUrl: './go-live.component.html',
  styleUrls: ['./go-live.component.css']
})
export class GoLiveComponent implements OnInit {


  constructor(private ps: ProductsService, private router: Router) { }

  ngOnInit(): void {
  }

  uploadLiveRecipes(product: RecipeCardModel, form: NgForm) {
    if (form.valid) {
      this.ps.addLiveRecipes(product);
      form.reset();
      this.router.navigate(['/Home']);
    }
    else {
      alert("Form incomplete.");
      
    }
  }

  

}
