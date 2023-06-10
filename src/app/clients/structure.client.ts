import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})

export class StructureClient {
    constructor(private http: HttpClient) {
    }

    public getStructures(): Observable<any> {
        return this.http.get(
            environment.apiUrl + '/estrutura/'
        )
    }
}