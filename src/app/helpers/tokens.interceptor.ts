import { AuthenticationService } from "../services/authentication.service";
import { 
    HttpEvent,
    HttpHandler,
    HttpInterceptor,
    HttpRequest,
} from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';

@Injectable()

export class TokenInterceptor implements HttpInterceptor {
    constructor(
        public authenticationService: AuthenticationService
    ) {}

    intercept(
        req: HttpRequest<any>,
        next: HttpHandler
    ): Observable<HttpEvent<any>> {
        
        if (this.authenticationService.isLoggedIn()) {
            let newRequest = req.clone({
                setHeaders: {
                    Authorization: `Bearer ${this.authenticationService.getToken()}`,
                },
            });
            console.log("Request: ", newRequest)
            return next.handle(newRequest);
        }

        console.log("Request: ", req)
        return next.handle(req);
    }
}