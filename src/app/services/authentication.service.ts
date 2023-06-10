import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationClient } from '../clients/authentication.client';
import { HttpErrorResponse } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})

export class AuthenticationService {
  private tokenKey = 'token';

  constructor(
    private authenticationClient: AuthenticationClient,
    private router: Router
  ) { }

  public login(email: string, password: string) {
    this.authenticationClient.login(email, password).subscribe({
      next: (res) => {
        res = JSON.parse(res);
        console.log("resposta", res.token.access);
        localStorage.setItem(this.tokenKey, res.token.access);
        this.router.navigate(['/']);
      },
      error: (error: HttpErrorResponse) => {
        console.log("Erro", error)
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
    this.authenticationClient.register(firstName, lastName, username, email, phoneNumber, cpf, password, passwordConf).subscribe((token) => {
      localStorage.setItem(this.tokenKey, token);
      this.router.navigate(['/']);
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
