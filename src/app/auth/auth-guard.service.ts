import { Injectable } from "@angular/core";
import { ActivatedRoute, ActivatedRouteSnapshot, CanActivate, Route, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "./auth.service";

@Injectable()
export class AuthGuardService implements CanActivate {

    constructor(public router: Router, public auth: AuthService, public route: ActivatedRoute) {

    }

    canActivate(): boolean {
        if (localStorage.getItem('accessToken') != null) {
            //this.router.navigate(['/Home']);
            return true;
        }

        alert("You have not logged into an account.");
        this.router.navigate(['/']);
        return false;
    }
}