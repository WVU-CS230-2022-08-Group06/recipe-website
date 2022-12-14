import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";
import { AuthService } from "./auth.service";

/*
This class  is CRITICAL to only allow moderators to access certain parts of the app
The main ability of a moderator is to review and accept/reject recipe submissions
This guard is entirely unique to moderators, rather than normal users
*/

@Injectable()
export class ModeratorGuard implements CanActivate {
    constructor(public router: Router, public auth: AuthService) {
    }

    /*
    The value of this method determines if moderator routes can be accessed
    */
    canActivate(): boolean {
        // first, we make sure the user is logged in
        if (localStorage.getItem('accessToken') != null) {
            // then, make sure the user is one of the emails designated to a moderator
            if (localStorage.getItem('userEmail') == "haughtluka256@gmail.com") {
                return true;
            }

            // if the user is logged in, but isn't a moderator account
            // we re-route them back to the home page
            alert("You do not have access to this page.");
            this.router.navigate(['/Home']);
            return false;
        }

        // if the user isn't even logged in, we display the below error
        // then, we re-route back to the login page
        alert("You have not logged into an account");
        this.router.navigate(['/']);
        return false;
    }
}