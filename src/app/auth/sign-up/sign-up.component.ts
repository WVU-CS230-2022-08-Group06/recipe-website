import { Component, OnInit } from '@angular/core';
import { AbstractControl, Form, FormControl, FormControlDirective, NgForm, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../auth.service';
import { AuthResponse } from '../authResponse';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  
  private authObservable!: Observable<AuthResponse>;
  
  constructor(private authService: AuthService, private route: Router) { 
    
  }
    

  ngOnInit(): void {
  }

  onSubmit(data: NgForm) {
   var pass = document.getElementById('password') as HTMLInputElement | null;
   var pass2 = document.getElementById('confirmpassword') as HTMLInputElement | null;

   if (pass?.value != pass2?.value) {
    alert("Passwords do not match");
   }
   else {
    const value = {
      x: (data: AuthResponse) => {alert("Account successfully created!"),this.route.navigate([''])},
      error: (err: Error) => alert("Account credentials already exists.")
      
    };

    this.authObservable = this.authService.signUp(data.value.email, data.value.password);
    this.authObservable.subscribe(value.x);
    
    }
    }

  }


  


