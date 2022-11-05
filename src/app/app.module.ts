import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
<<<<<<< Updated upstream

@NgModule({
  declarations: [
    AppComponent
=======
import { HeaderComponent } from './header/header.component';
import { CarouselsComponent } from './carousels/carousels.component';
import { FooterComponent } from './footer/footer.component';
import { CardsComponent } from './cards/cards.component';
import { TopNavBarComponent } from './top-nav-bar/top-nav-bar.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { HomeLayoutComponent } from './home-layout/home-layout.component';
import { UserSignComponent } from './user-sign/user-sign.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CarouselsComponent,
    FooterComponent,
    CardsComponent,
    TopNavBarComponent,
    SearchBarComponent,
    UserLoginComponent,
    HomeLayoutComponent,
    UserSignComponent
>>>>>>> Stashed changes
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
