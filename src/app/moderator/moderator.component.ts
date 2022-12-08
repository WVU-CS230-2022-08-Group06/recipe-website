import { Component, OnInit } from '@angular/core';
import { RecipeCardModel } from '../cards/recipe-card.model';
import { ProductsService } from '../products-service';

@Component({
  selector: 'app-moderator',
  templateUrl: './moderator.component.html',
  styleUrls: ['./moderator.component.css']
})
export class ModeratorComponent implements OnInit {

  constructor(private productsService: ProductsService) { }

  ngOnInit(): void {
  }

  accept(product: RecipeCardModel) {
    console.log(product);
    this.productsService.addProducts(product);
  }

  reject(product: RecipeCardModel) {
    this.productsService.removeRequest(product);
  }

}
