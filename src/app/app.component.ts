import {Component, HostListener} from '@angular/core';
import {Subscription} from "rxjs";
import {environment} from "../environments/environment";
import {AuthService} from "./auth/auth.service";
import {TokenStorageService} from "./auth/token-storage.service";
import {UserService} from "./auth/user.service";
import {User} from "./entities/user/user";
import {CookiesService} from "./config/cookies.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  title = 'ToateFlorile';
  isSticky = false;

  isAuthenticated = this.tokenService.isAuthenticated();

  userRole?: any;
  user?: User;


  @HostListener("window:scroll", [])
  onWindowScroll() {
    if (window.pageYOffset > 0) {
      this.isSticky = true;
    }
  }
  ngOnInit(){
    //Cookies - START
    //TODO: add a data privacy page
    this.cookiesService.showCookies();
    //COOKIES - END

    /*Role access - START
    This function gets the username and uses it to recover the user role.
    */
    if(this.tokenService.getUserName()) {
      const username = this.tokenService.getUserName();
      if(username) {
        this.userService.getUser(JSON.parse(username).username).subscribe(user => {
          this.user = user;
          if (this.user && this.user.roles)
            this.userRole = this.user.roles[0].name;
        });
      }
    }
    //Role access - END



  }

  logout(){
    this.tokenService.signOut();
    this.userRole = "";
    window.location.reload();
  }

  constructor(private tokenService: TokenStorageService, private userService: UserService, private cookiesService: CookiesService){}

}
