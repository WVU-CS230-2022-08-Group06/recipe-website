import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthComponent } from '../auth/auth.component';
import { AuthService } from '../auth/auth.service';
import { AuthResponse } from '../auth/authResponse';

@Component({
  selector: 'app-top-nav-bar',
  templateUrl: './top-nav-bar.component.html',
  styleUrls: ['./top-nav-bar.component.css']
})
export class TopNavBarComponent implements OnInit {

  constructor(private auth: AuthService) { }

  ngOnInit(): void {
    this.auth.isLoggedIn = true;
  }

  redirect() {
    localStorage.clear();
  }

  

}
