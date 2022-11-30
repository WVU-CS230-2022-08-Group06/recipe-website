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
   
    getAmericanProducts() {
        return this.db.list<RecipeCardModel>("americanrecipes").valueChanges();
    }
    getChineseProducts() {
        return this.db.list<RecipeCardModel>("chineserecipes").valueChanges();
    }
    getIndianProducts() {
        return this.db.list<RecipeCardModel>("indianrecipes").valueChanges();
    }
    getKoreanProducts() {
        return this.db.list<RecipeCardModel>("koreanrecipes").valueChanges();
    }
    getMexicanProducts() {
        return this.db.list<RecipeCardModel>("mexicanrecipes").valueChanges();
    }

    // this is how we submit ALL uploaded recipes to database
    // in addition, we inspect two main traits of each recipe: style (mexican, etc.) and category (lunch, dinner, etc.)
    // this allows us to decide what other lists to push the data to
    addProducts(product: RecipeCardModel) {
        this.db.list<RecipeCardModel>("allrecipes").push(product);
        
        if (product.style == "American") {
            this.addAmericanProducts(product);
        }
        if (product.style == "Chinese") {
            this.addChineseProducts(product);
        }
        if (product.style == "Mexican") {
            this.addMexicanProducts(product);
        }
        if (product.style == "Korean") {
            this.addKoreanProducts(product);
        }
        if (product.style == "Indian") {
            this.addIndianProducts(product);
        }
        this.determineMeal(product);
        
    }

    addAmericanProducts(product: RecipeCardModel) {
        this.db.list<RecipeCardModel>("americanrecipes").push(product);
    }
    addMexicanProducts(product: RecipeCardModel) {
        this.db.list<RecipeCardModel>("mexicanrecipes").push(product);
    }
    addChineseProducts(product: RecipeCardModel) {
        this.db.list<RecipeCardModel>("chineserecipes").push(product);
    }
    addKoreanProducts(product: RecipeCardModel) {
        this.db.list<RecipeCardModel>("koreanrecipes").push(product);
    }
    addIndianProducts(product: RecipeCardModel) {
        this.db.list<RecipeCardModel>("indianrecipes").push(product);
    }
    addBreakfastProducts(product: RecipeCardModel) {
        this.db.list<RecipeCardModel>("breakfastrecipes").push(product);
    }
    addLunchProducts(product: RecipeCardModel) {
        this.db.list<RecipeCardModel>("lunchrecipes").push(product);
    }
    addDinnerProducts(product: RecipeCardModel) {
        this.db.list<RecipeCardModel>("dinnerrecipes").push(product);
    }
    addDessertProducts(product: RecipeCardModel) {
        this.db.list<RecipeCardModel>("dessertrecipes").push(product);
    }

    determineMeal(product: RecipeCardModel) {
        if (product.category == "Breakfast") {
            this.addBreakfastProducts(product);
        }
        if (product.category == "Lunch") {
            this.addLunchProducts(product);
        }
        if (product.category == "Dinner") {
            this.addDinnerProducts(product);
        }
        if (product.category == "Dessert") {
            this.addDessertProducts(product);
        }
    }

    



}