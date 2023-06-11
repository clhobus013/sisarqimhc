import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})

export class AuthenticationClient {
    constructor(private http: HttpClient) {
    }

    public login(email: string, password: string): Observable<any> {
        return this.http.post(
            environment.apiUrl + '/account/login/', {
                email: email,
                password: password,
            }, 
            { responseType: 'text'}
        )
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
    ): Observable<any> {
        return this.http.post(
            environment.apiUrl + '/account/register/', {
                first_name: firstName,
                last_name: lastName,
                username: username,
                email: email,
                phone_number: phoneNumber,
                cpf: cpf,
                password: password,
                password2: passwordConf,
            }, 
            { responseType: 'text'}
        )
    }
}