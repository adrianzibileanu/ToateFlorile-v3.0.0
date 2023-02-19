import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class CookiesService {


  cookieMessage = "Acest site folosește cookie-uri pentru a îmbunătăți experiența utilizatorilor. Prin continuarea navigării pe acest site, sunteți de acord cu utilizarea cookie-urilor.Pentru mai multe informații, te rugăm să accesezi ";
  cookieDismiss = "Accept";
  cookieLinkText = "<a href='http://example.com/politica-cookie-uri'>Politica noastră de cookie-uri</a>.";


  constructor() { }

  showCookies(){
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
  }
}
