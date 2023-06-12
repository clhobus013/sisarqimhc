import { environment } from 'src/environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})

export class CollectionClient {
    constructor(private http: HttpClient) {
    }

    public getCollections(): Observable<any> {
        let params = new HttpParams().set("p", 1);
        return this.http.get(
            environment.apiUrl + '/acervo/', {params: params}
        )
    }

    public getCollection(id: number): Observable<any> {
        return this.http.get(
            environment.apiUrl + '/acervo/' + id + '/'
        )
    }
}