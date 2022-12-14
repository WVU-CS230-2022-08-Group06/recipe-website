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


import { HomeLayoutComponent } from './home-layout/home-layout.component';

import { AddRecipeComponent } from './add-recipe/add-recipe.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';




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
import { AuthService } from './auth/auth.service';
import { HttpClient, HttpClientModule, HttpHandler } from '@angular/common/http';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { SearchComponent } from './search/search.component';
import { QuickComponent } from './quick/quick.component';
import { BeefComponent } from './beef/beef.component';
import { ChickenComponent } from './chicken/chicken.component';
import { SeafoodComponent } from './seafood/seafood.component';
import { PastaComponent } from './pasta/pasta.component';
import { FruitVegComponent } from './fruit-veg/fruit-veg.component';
import { AuthGuardService } from './auth/auth-guard.service';
import { ModeratorComponent } from './moderator/moderator.component';
import { InspectRecipesComponent } from './inspect-recipes/inspect-recipes.component';
import { ModeratorGuard } from './auth/moderator-guard';
import { ModNavbarComponent } from './mod-navbar/mod-navbar.component';
import { ForgotPassComponent } from './auth/forgot-pass/forgot-pass.component';
import { AngularFireAuth, AngularFireAuthModule } from '@angular/fire/compat/auth';
import { SavedRecipesComponent } from './saved-recipes/saved-recipes.component';
import { CommentsComponent } from './comments/comments/comments.component';
import { CommentComponent } from './comments/comments/comment/comment.component';
import { CommentFormComponent } from './comments/comments/comment-form/comment-form.component';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CarouselsComponent,
    FooterComponent,
    CardsComponent,
    TopNavBarComponent,
    SearchBarComponent,
    
    HomeLayoutComponent,
    AddRecipeComponent,
    
   

    
    
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
    AuthComponent,
    SignUpComponent,
    SearchComponent,
    QuickComponent,
    BeefComponent,
    ChickenComponent,
    SeafoodComponent,
    PastaComponent,
    FruitVegComponent,
    ModeratorComponent,
    InspectRecipesComponent,
    
    ModNavbarComponent,
    ForgotPassComponent,
    SavedRecipesComponent,
    CommentsComponent,
    CommentComponent,
    CommentFormComponent,

    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [AuthService, HttpClient, AuthGuardService, ModeratorGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
