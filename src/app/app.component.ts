import {Component, HostListener} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ToateFlorile';
  isSticky = false;

  @HostListener("window:scroll", [])
  onWindowScroll() {
    if (window.pageYOffset > 0) {
      this.isSticky = true;
    }
  }
}
