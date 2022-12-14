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
    /*
    These variables allow us post information to a specific url
    The exact url depends on if a user is signing up, logging in, or changing their password
    */
    baseUrl: string = "https://identitytoolkit.googleapis.com/v1/accounts"
    signUpEndPoint: string = "signUp";
    signIn: string = "signInWithPassword"
    forgotPassEndPoint: string = "sendOobCode";
    auth: string = "https://mock-recipe.firebaseio.com/users/ada/name.json?auth=";

   public isLoggedIn: boolean = false;
   public modEmail: boolean = false;

   
    public constructor(private http: HttpClient ) {

    }

    /*
    This is our auth service class
    Allows users to sign-up and sign-in with backend Firebase Authentication
    Also allows users to change their password if forgotten
    */

    // this method is called when a user is signing up for the first time
    // base url is used with a specific end point
    // we connect it to our firebase with the unique API key
    // parameters: email and password
    public signUp(email: string, password: string) {
        const requestBody = {
            "email": email,
            "password": password,
            "returnSecureToken": true
        };
        return this.http.post<AuthResponse>(this.baseUrl + ":" + this.signUpEndPoint + "?" + "key=" + environment.firebase.apiKey, requestBody);
    }


    // this method is called when a user is attempting to login to their account
    // same base URL, but different end point
    // parameters: email and password (since both needed to login)
    public login(email: string, password: string) {
        const requestBody = {
            "email": email,
            "password": password,
            "returnSecureToken": true
        };
        return this.http.post<AuthResponse>(this.baseUrl + ":" + this.signIn + "?" + "key=" + environment.firebase.apiKey, requestBody);
    }

    // this method allows a user to set-up a new password if the original is forgotten
    // we require an email parameter to send the reset email to
    // same base URL, but different end point
    public forgotPassword(email: string) {
        const requestBody = {
            "email": email,
            "requestType": "PASSWORD_RESET"
        };

        return this.http.post<ForgotResponse>(this.baseUrl + ":" + this.forgotPassEndPoint + "?" + "key=" + environment.firebase.apiKey, requestBody);
    }

    }

    


