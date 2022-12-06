import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AddRecipeComponent } from '../add-recipe/add-recipe.component';
import { AuthService } from './auth.service';

import { AuthResponse } from './authResponse';


@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  
  private authObservable!: Observable<AuthResponse>;
  

  constructor(private authService: AuthService, private route: Router ) {
    
   }

  ngOnInit(): void {
    
  }

  // if someone clicks login
  onSubmit(myData: NgForm) {

    const value = {
      x: (data: AuthResponse) => this.route.navigate(['']),
      error: (err: Error) =>  alert("Invalid login credentials")
      
    };

      this.authObservable = this.authService.login(myData.value.email, myData.value.password);
      // we need to validate if login was successful
      // if so, we route to home page 
      // if not, we display error message and stay at login
      this.authObservable.subscribe(value.x);
      
  }

 
}
