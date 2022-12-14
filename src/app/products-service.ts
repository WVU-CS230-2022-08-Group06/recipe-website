import { Injectable } from '@angular/core';
import {AngularFireDatabase} from '@angular/fire/compat/database'

import { HttpClient } from "@angular/common/http";
import { RecipeCardModel } from './cards/recipe-card.model';
import { KeyValue } from '@angular/common';


@Injectable (
{providedIn: 'root'}
)
export class ProductsService {

    private baseUrl: string = "https://mock-recipe-default-rtdb.firebaseio.com/";
    private productsEndPoint: string = "beef.json"
    constructor (private db: AngularFireDatabase) {
    }

    ngInOnIt() {
    }

    /*
    This is our service class
    Serves as the middle man between front-end and database
    Provides all of the methods to pull, push, and remove data from backend database
    Methods correspond to different lists in the backend
    */

    // this is how we retrieve ALL recipes (accepted)
    getProducts() {
        return this.db.list<RecipeCardModel>("allrecipes").valueChanges();
    }

    // retrieve the recommended recipes to display them on the home page
    getRequestedProducts() {
        return this.db.list<RecipeCardModel>("requestedrecipes").valueChanges();
    }

    // when a user successfully recommends a recipe, this method pushes the recipe to backend
    addRequestedProducts(product: RecipeCardModel) {
         this.db.list<RecipeCardModel>("requestedrecipes").push(product);
    }
   

    // this is how we submit ALL accepted uploaded recipes to database
    // this method will be called if "accept" is hit on each recipe
    addProducts(product: RecipeCardModel) {
        this.db.list<RecipeCardModel>("allrecipes").push(product);

    }

    // when a user initially submits a recipe, this method is called
    addRequestedRecipes(product: RecipeCardModel) {
        // when we push the recipe, we set the key of it!
        // this way, we know which recipe it is if we later want to remove it
        this.db.list<RecipeCardModel>("testing").set(product.recipeName, product); 
    }

    // this is the method to retrieve all of the recipe uploads
    // when moderators are seeing all of the submitted recipes, they're from this method
    getRequestedRecipes() {
        return this.db.list<RecipeCardModel>("testing").valueChanges();
    }

    // regardless of whether or not a recipe is accepted/rejected, we want to remove it
    // after a moderator decides, this method is called to delete the recipe out of this list
    removeRequest(product: RecipeCardModel) {
       this.db.object('/testing/' + product.recipeName).remove();
    
    }


    // everytime a user saves a recipe, this method is called to push it to the backend
    // we use the 2 variables to get the users email up until the "."
    // example: haughtluka256@gmail.com >>> user = haughtluka256@gmail
    addSavedRecipes(product: RecipeCardModel) {
        var end = product.savedBy.indexOf(".");
        var user = product.savedBy.substring(0, end);
        this.db.list<RecipeCardModel>("savedrecipes").set(user + product.recipeName, product);
    }

    // we retrieve all saved recipes
    // further inspection will determine which ones show up for each user
    getSavedRecipes() {
        return this.db.list<RecipeCardModel>("savedrecipes").valueChanges();
    }

    // if a user decides to un-save a recipe, this method is called
    removeSavedRecipe(product: RecipeCardModel) {
        var end = product.savedBy.indexOf(".");
        var user = product.savedBy.substring(0, end);
        this.db.object('/savedrecipes/' + user + product.recipeName).remove();
    }

}