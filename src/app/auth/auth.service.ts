import { EnvironmentInjector, Inject, Injectable } from "@angular/core"
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { AuthResponse } from "./authResponse";
import { ForgotResponse } from "./forgotResponse";
import {getAuth, onAuthStateChanged} from "firebase/auth";
import { AngularFireDatabase } from "@angular/fire/compat/database";
import { AngularFireAuth } from "@angular/fire/compat/auth";


@Injectable ({
    providedIn: 'root'
})

export class AuthService {
    baseUrl: string = "https://identitytoolkit.googleapis.com/v1/accounts"
    signUpEndPoint: string = "signUp";
    signIn: string = "signInWithPassword"
    forgotPassEndPoint: string = "sendOobCode";
    auth: string = "https://mock-recipe.firebaseio.com/users/ada/name.json?auth=";

   public isLoggedIn: boolean = false;
   public modEmail: boolean = false;

   
    public constructor(private http: HttpClient ) {

    }

    public signUp(email: string, password: string) {
        const requestBody = {
            "email": email,
            "password": password,
            "returnSecureToken": true
        };
        return this.http.post<AuthResponse>(this.baseUrl + ":" + this.signUpEndPoint + "?" + "key=" + environment.firebase.apiKey, requestBody);
    }

    public login(email: string, password: string) {
        const requestBody = {
            "email": email,
            "password": password,
            "returnSecureToken": true
        };
        return this.http.post<AuthResponse>(this.baseUrl + ":" + this.signIn + "?" + "key=" + environment.firebase.apiKey, requestBody);
    }

    public forgotPassword(email: string) {
        const requestBody = {
            "email": email,
            "requestType": "PASSWORD_RESET"
        };

        return this.http.post<ForgotResponse>(this.baseUrl + ":" + this.forgotPassEndPoint + "?" + "key=" + environment.firebase.apiKey, requestBody);
    }

    }

    


