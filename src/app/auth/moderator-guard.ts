import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";
import { AuthService } from "./auth.service";

@Injectable()
export class ModeratorGuard implements CanActivate {
    constructor(public router: Router, public auth: AuthService) {

    }

    canActivate(): boolean {
        if (localStorage.getItem('accessToken') != null) {
            //this.router.navigate(['/Home']);
            if (localStorage.getItem('userEmail') == "haughtluka256@gmail.com") {
                return true;
            }
            alert("You do not have access to this page. Good try ;)");
            this.router.navigate(['/Home']);
            return false;
        }

        alert("You have not logged into an account");
        this.router.navigate(['/']);
        return false;
    }
}