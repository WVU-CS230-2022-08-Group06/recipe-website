import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CarouselsComponent } from './carousels/carousels.component';
import { FooterComponent } from './footer/footer.component';
import { CardsComponent } from './cards/cards.component';
import { TopNavBarComponent } from './top-nav-bar/top-nav-bar.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserSignComponent } from './user-sign/user-sign.component';
import { HomeLayoutComponent } from './home-layout/home-layout.component';

import { AddRecipeComponent } from './add-recipe/add-recipe.component';
import { FormsModule } from '@angular/forms';


import { UserPageComponent } from './user-page/user-page.component';

import {AngularFireModule} from '@angular/fire/compat';
import {AngularFirestoreModule} from '@angular/fire/compat/firestore/';
import { environment } from 'src/environments/environment.prod';
import { FullRecipeComponent } from './cards/full-recipe/full-recipe.component';
import { BfastRecipesComponent } from './bfast-recipes/bfast-recipes.component';
import { LunchRecipesComponent } from './lunch-recipes/lunch-recipes.component';
import { DinnerRecipesComponent } from './dinner-recipes/dinner-recipes.component';
import { DessertRecipesComponent } from './dessert-recipes/dessert-recipes.component';
import { AmericanRecipesComponent } from './american-recipes/american-recipes.component';
import { IndianRecipesComponent } from './indian-recipes/indian-recipes.component';
import { ChineseRecipesComponent } from './chinese-recipes/chinese-recipes.component';
import { KoreanRecipesComponent } from './korean-recipes/korean-recipes.component';
import { MexicanRecipesComponent } from './mexican-recipes/mexican-recipes.component';
import { AllRecipesComponent } from './all-recipes/all-recipes.component';
import { RequestComponent } from './request/request.component';
import { RequestFormComponent } from './request-form/request-form.component';
import { ModalComponent } from './modal/modal.component';
import { AuthComponent } from './auth/auth.component';



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
    UserSignComponent,
    HomeLayoutComponent,
    AddRecipeComponent,
    
   

    
    UserPageComponent,
    FullRecipeComponent,
    BfastRecipesComponent,
    LunchRecipesComponent,
    DinnerRecipesComponent,
    DessertRecipesComponent,
    AmericanRecipesComponent,
    IndianRecipesComponent,
    ChineseRecipesComponent,
    KoreanRecipesComponent,
    MexicanRecipesComponent,
    AllRecipesComponent,
    RequestComponent,
    RequestFormComponent,
    ModalComponent,
    AuthComponent
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
