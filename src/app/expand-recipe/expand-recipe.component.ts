import { Component, Input, OnInit, ɵɵInheritDefinitionFeature } from '@angular/core';
import { RecipeCardModel } from '../cards/recipe-card.model';
import { ProductsService } from '../products-service';
import { CardsComponent } from '../cards/cards.component';

@Component({
  selector: 'app-expand-recipe',
  templateUrl: './expand-recipe.component.html',
  styleUrls: ['./expand-recipe.component.css']
})
export class ExpandRecipeComponent  implements OnInit {

 
  //@Input() recipeName: string;
  constructor() { 
    //this.recipeName = "This is just a test";
    
  }

  getValue() {
    
  }

   ngOnInit(): void {
   
  }

}
