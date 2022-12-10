import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../auth.service';
import { AuthResponse } from '../authResponse';
import { ForgotResponse } from '../forgotResponse';

@Component({
  selector: 'app-forgot-pass',
  templateUrl: './forgot-pass.component.html',
  styleUrls: ['./forgot-pass.component.css']
})
export class ForgotPassComponent implements OnInit {

  private authObservable!: Observable<ForgotResponse>;
  constructor(private authService: AuthService, private route: Router) { }

  ngOnInit(): void {
  }

  onSubmit(myData: NgForm) {

    const value = {
      x: (data: ForgotResponse) => {alert("Email successfully sent! Please check your email for the reset link."), this.route.navigate(['/']) },
      error: (err: Error) =>  {alert("Invalid login credentials"), localStorage.setItem('token', 'null')}
    };

    this.authObservable = this.authService.forgotPassword(myData.value.email);
    this.authObservable.subscribe(value.x);
  }

}
