import { environment } from 'src/environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Collection } from '../models/Collection.model';

@Injectable({
    providedIn: 'root',
})

export class StructureClient {
    constructor(private http: HttpClient) {
    }

    public getStructures(collection: Collection): Observable<any> {
        let params = new HttpParams().set("acervo_id", collection.id);
        return this.http.get(
            environment.apiUrl + '/estrutura/', {params: params}
        )
    }
}