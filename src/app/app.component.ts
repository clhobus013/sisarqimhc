import { Component } from '@angular/core';
import { faBookmark } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'sisarqimhc';
  faBookmark = faBookmark;
  isCollapsed = false;

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
}
