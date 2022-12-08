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
            if (localStorage.getItem('moderatorEmail') == "haughtluka256@gmail.com") {
                return true;
            }
            alert("Page is only accessibly by moderators.");
            this.router.navigate(['/Home']);
            return false;
        }

        alert("You have not logged into an account");
        this.router.navigate(['/']);
        return false;
    }
}