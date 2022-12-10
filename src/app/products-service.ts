import { Injectable } from '@angular/core';
import {AngularFireDatabase} from '@angular/fire/compat/database'

import { HttpClient } from "@angular/common/http";
import { RecipeCardModel } from './cards/recipe-card.model';
import { KeyValue } from '@angular/common';


@Injectable (
{providedIn: 'root'}
)
export class ProductsService {

   
    
    public recipeID: string = "undefined";
    private baseUrl: string = "https://mock-recipe-default-rtdb.firebaseio.com/";
    private productsEndPoint: string = "beef.json"
    constructor (private db: AngularFireDatabase) {
    }

    ngInOnIt() {
        
     
    }

    

    // possibly use this map to store key values?
    
    
    

    // this is how we retrieve ALL recipes
    getProducts() {
        return this.db.list<RecipeCardModel>("allrecipes").valueChanges();
    }

    // retrieve the recommended recipes
    getRequestedProducts() {
        return this.db.list<RecipeCardModel>("requestedrecipes").valueChanges();
    }

    // push recommended recipes
    addRequestedProducts(product: RecipeCardModel) {
         this.db.list<RecipeCardModel>("requestedrecipes").push(product);
    }
   

    // this is how we submit ALL uploaded recipes to database
    // in addition, we inspect two main traits of each recipe: style (mexican, etc.) and category (lunch, dinner, etc.)
    // this allows us to decide what other lists to push the data to

    // this method will be used if "accept" is hit on each recipe
    addProducts(product: RecipeCardModel) {
        this.db.list<RecipeCardModel>("allrecipes").push(product);

    }

    // this method is what adds uploaded recipes to database
    addRequestedRecipes(product: RecipeCardModel) {
        //let result =  this.db.list<RecipeCardModel>("testing").push(product);
        this.db.list<RecipeCardModel>("testing").set(product.recipeName, product); 
    }

    // this is the method to retrieve all of the recipe uploads
    getRequestedRecipes() {
        return this.db.list<RecipeCardModel>("testing").valueChanges();
    }

    removeRequest(product: RecipeCardModel) {
       this.db.object('/testing/' + product.recipeName).remove();
    
    }

    addLiveRecipes(product: RecipeCardModel) {
        this.db.list<RecipeCardModel>("liverecipes").push(product);
    }

    getLiveRecipes() {
        return this.db.list<RecipeCardModel>("liverecipes").valueChanges();
    }

}