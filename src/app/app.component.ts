import {Component, HostListener} from '@angular/core';
import {Subscription} from "rxjs";
import {environment} from "../environments/environment";
import {AuthService} from "./auth/auth.service";
import {TokenStorageService} from "./auth/token-storage.service";
import {UserService} from "./auth/user.service";
import {User} from "./entities/user/user";
import {CookiesService} from "./config/cookies.service";
import {NavigationEnd, Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'ToateFlorile';
  isSticky = false;
  secondary = false;
  isAuthenticated = this.tokenService.isAuthenticated();
  userRole?: any;
  user?: User;

  @HostListener("window:scroll", [])
  onWindowScroll() {
    if (window.scrollY > 0) {
      this.isSticky = true;
    }
    if(window.scrollY <= 0){
      this.isSticky = false;
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

    //route change detection START
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        if(event.url != "/"){
          this.secondary = true;
        }else{
          this.secondary = false;
        }
      }
    });
    //route change detection END


  }

  logout(){
    this.tokenService.signOut();
    this.userRole = "";
    if(location.pathname != "/admin")
    window.location.reload();
    else
      window.location.replace("http://localhost:4200");
  }

  constructor(private tokenService: TokenStorageService, private userService: UserService, private cookiesService: CookiesService, private router: Router){

    router.events.subscribe((val) => {
      // see also
      console.log(val instanceof NavigationEnd)
    });

  }

}
