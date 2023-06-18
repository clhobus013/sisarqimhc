import { Component } from '@angular/core';
import { faBookmark } from '@fortawesome/free-solid-svg-icons';
import { AuthenticationService } from './services/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'sisarqimhc';
  faBookmark = faBookmark;
  isCollapsed = false;

  constructor(private authenticationService: AuthenticationService){}
  

  public toggleNavbar(button: HTMLElement, navbar: HTMLElement) {
    if (this.isCollapsed) {
      button.classList.add('collapsed');
      navbar.classList.remove('show');
    } else {
      button.classList.remove('collapsed');
      navbar.classList.add('show');
    }

    this.isCollapsed = !this.isCollapsed
  }

  public logout(): void {
    this.authenticationService.logout();
  }
}
