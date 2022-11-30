import { Component, Input, OnInit } from '@angular/core';
import { BeefRecipesComponent } from 'src/app/beef-recipes/beef-recipes.component';
import { CardsComponent } from '../cards.component';

@Component({
  selector: 'app-full-recipe',
  templateUrl: './full-recipe.component.html',
  styleUrls: ['./full-recipe.component.css']
})
export class FullRecipeComponent  extends CardsComponent implements OnInit {
  @Input() myName : string;
  constructor() { 
    super();
    this.myName = "hello";
    
  }
 
  override ngOnInit(): void {


}




}
