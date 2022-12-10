import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mod-navbar',
  templateUrl: './mod-navbar.component.html',
  styleUrls: ['./mod-navbar.component.css']
})
export class ModNavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  redirect() {
    localStorage.clear();
  }

}
