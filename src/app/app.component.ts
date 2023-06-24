import { Component } from '@angular/core';
import { faBookmark } from '@fortawesome/free-solid-svg-icons';
import { AuthenticationService } from './services/authentication.service';
import { AuthenticationClient } from './clients/authentication.client';
import { ToastrService } from 'ngx-toastr';
import { HttpErrorResponse } from '@angular/common/http';
import { User } from './models/User.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'sisarqimhc';
  faBookmark = faBookmark;
  isCollapsed = false;

  user!: User;

  constructor(
    private authenticationService: AuthenticationService,
    private authenticationClient: AuthenticationClient,
    private toastr: ToastrService
  ){
    this.getUser()
  }
  

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

  public getUser() {
    this.authenticationClient.getUser().subscribe({
      next: (res) => {

        if(!!res) {
          let user = res.usuario;
          this.user = new User(user.id, user.first_name, user.last_name, user.email, user.username, user.password, user.phone_number, user.cpf, res.is_admin, res.is_staff)
        }
      },
      error: (error: HttpErrorResponse) => {
        console.log(error);
        let strError = error.error.detail;
        this.toastr.error(strError, "Não foi possível obter o usuario ");
      }
    })
  }
}
