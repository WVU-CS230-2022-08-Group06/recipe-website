import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AddRecipeComponent } from '../add-recipe/add-recipe.component';
import { AuthGuardService } from './auth-guard.service';
import { AuthService } from './auth.service';

import { AuthResponse } from './authResponse';



@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  
  private authObservable!: Observable<AuthResponse>;
  private authVerify!: Observable<Object>;

  constructor(private authService: AuthService, private route: Router, public guard: AuthGuardService ) {
    
   }

  ngOnInit(): void {
    localStorage.clear();
  }




  // if someone clicks login
  onSubmit(myData: NgForm) {

    const value = {
      x: (data: AuthResponse) => {localStorage.setItem('accessToken', data.idToken); 
        localStorage.setItem('auth', data.localId);
        localStorage.setItem('userEmail', data.email);
        alert("Login successful!");
        if (data.email == "haughtluka256@gmail.com") {
          this.route.navigate(['Mod']);
        }
        else {
          this.route.navigate(['/Home']);
        }
      },
      error: (err: Error) =>  {alert("Invalid login credentials"), localStorage.setItem('token', 'null')}
    };

      this.authObservable = this.authService.login(myData.value.email, myData.value.password);
      this.authObservable.subscribe(value.x);
      
  }

  
}
