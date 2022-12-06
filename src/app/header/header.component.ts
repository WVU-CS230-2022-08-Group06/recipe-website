import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  ingredientArray : string[] = ["Chicken", "Seafood"];
  constructor(private route: Router) { }

  ngOnInit(): void {
  }

  // potentially use this method to get search bar value?
  

 

}
