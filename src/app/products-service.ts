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

    // this is how we retrieve ALL recipes
    getProducts() {
        return this.db.list<RecipeCardModel>("allrecipes").valueChanges();
    }
    getRequestedProducts() {
        return this.db.list<RecipeCardModel>("requestedrecipes").valueChanges();
    }
    addRequestedProducts(product: RecipeCardModel) {
         this.db.list<RecipeCardModel>("requestedrecipes").push(product);
    }
   

    // this is how we submit ALL uploaded recipes to database
    // in addition, we inspect two main traits of each recipe: style (mexican, etc.) and category (lunch, dinner, etc.)
    // this allows us to decide what other lists to push the data to
    addProducts(product: RecipeCardModel) {
        this.db.list<RecipeCardModel>("allrecipes").push(product);
        
    }

}