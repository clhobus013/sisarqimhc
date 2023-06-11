import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationClient } from '../clients/authentication.client';
import { HttpErrorResponse } from "@angular/common/http";
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})

export class AuthenticationService {
  private tokenKey = 'token';

  constructor(
    private authenticationClient: AuthenticationClient,
    private router: Router,
    private toastr: ToastrService
  ) { }

  public login(email: string, password: string) {
    this.authenticationClient.login(email, password).subscribe({
      next: (res) => {
        res = JSON.parse(res);

        if (!!res) {
          localStorage.setItem(this.tokenKey, res.token.access);
          this.toastr.success(res.response);
          this.router.navigate(['/']);
        }
      },
      error: (error: HttpErrorResponse) => {
        let strError = JSON.parse(error.error).error;
        this.toastr.error(strError, "Não foi possível efetuar o login");
      }
    })
  }

  public register(
    firstName: string,
    lastName: string,
    username: string,
    email: string,
    phoneNumber: string,
    cpf: string,
    password: string,
    passwordConf: string
  ) {
    this.authenticationClient.register(firstName, lastName, username, email, phoneNumber, cpf, password, passwordConf).subscribe({
      next:(res) => {
        res = JSON.parse(res);
        if (!!res) {
          localStorage.setItem(this.tokenKey, res.token.access);
          this.toastr.success(res.response);
          this.router.navigate(['/']);
        }
      },
      error: (error: HttpErrorResponse) => {
        let strError = JSON.parse(error.error).error;
        this.toastr.error(strError, "Não foi possível efetuar o cadastro");
      }
    })
  }

  public logout() {
    localStorage.removeItem(this.tokenKey);
    this.router.navigate(['/login']);
  }

  public isLoggedIn():boolean {
    let token = localStorage.getItem(this.tokenKey);
    return token != null && token.length > 0;
  }

  public getToken():string | null {
    return this.isLoggedIn() ? localStorage.getItem(this.tokenKey) : null;
  }
}
