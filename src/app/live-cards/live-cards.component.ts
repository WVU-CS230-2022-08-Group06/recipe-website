import { Component, OnInit } from '@angular/core';
import { RecipeCardModel } from '../cards/recipe-card.model';
import { ProductsService } from '../products-service';

@Component({
  selector: 'app-live-cards',
  templateUrl: './live-cards.component.html',
  styleUrls: ['./live-cards.component.css']
})
export class LiveCardsComponent implements OnInit {

  liveRecipes: RecipeCardModel[]= []
  constructor(private productsService: ProductsService) { }

  ngOnInit(): void {

    this.productsService.getLiveRecipes().subscribe((data: RecipeCardModel[])=> 
    {console.log("Fetching products");
    for(var product of data) {
      console.log(product);
      this.liveRecipes.push(product);
      
    }
    
  })
  }

}
