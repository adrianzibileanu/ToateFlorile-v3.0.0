import {Component, HostListener} from '@angular/core';
import {Subscription} from "rxjs";
import {environment} from "../environments/environment";
import {AuthService} from "./auth/auth.service";
import {TokenStorageService} from "./auth/token-storage.service";
import {UserService} from "./auth/user.service";
import {User} from "./entities/user/user";

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

  cookieMessage = "Acest site folosește cookie-uri pentru a îmbunătăți experiența utilizatorilor. Prin continuarea navigării pe acest site, sunteți de acord cu utilizarea cookie-urilor.Pentru mai multe informații, te rugăm să accesezi ";
  cookieDismiss = "Accept";
  cookieLinkText = "<a href='http://example.com/politica-cookie-uri'>Politica noastră de cookie-uri</a>.";

  @HostListener("window:scroll", [])
  onWindowScroll() {
    if (window.pageYOffset > 0) {
      this.isSticky = true;
    }
  }
  ngOnInit(){
    let cc = window as any;
    cc.cookieconsent.initialise({
      palette: {
        popup: {
          background: "#9a45c5"
        },
        button: {
          background: "#401b52",
          text: "#ffffff"
        }
      },
      theme: "classic",
      content: {
        message: this.cookieMessage,
        dismiss: this.cookieDismiss,
        link: this.cookieLinkText,
        href: environment.production + "/dataprivacy"
      }
    });

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



  }

  logout(){
    this.tokenService.signOut();
    this.userRole = "";
    window.location.reload();
  }

  constructor(private tokenService: TokenStorageService, private userService: UserService){}

}
