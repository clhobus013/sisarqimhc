import { environment } from 'src/environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})

export class StructureClient {
    constructor(private http: HttpClient) {
    }

    public getStructures(): Observable<any> {
        let params = new HttpParams().set("acervo_id", 1);
        return this.http.get(
            environment.apiUrl + '/estrutura/', {params: params}
        )
    }
}