import { Component, OnInit, Input } from '@angular/core';
import { Route, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
  @Input() recipePicture: string;
  @Input() desc:string;
 @Input() recipeName: string;
 @Input() theStyle: string;
 @Input() category: string;
 


  constructor() { 
    
  this.recipePicture = "/assets/image/pic1.png";
  this.desc = "missing description";
  this.recipeName = "Fuck";
  this.theStyle = "None";
  this.category = "None";
 
  }

  ngOnInit(): void {
    this.recipeName = this.recipeName;
  }

  setName(): void {
    //this.recipeName = thirecipeName;
  }
  getName() : string {
    return this.recipeName;
  }

}
