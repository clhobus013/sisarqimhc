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

    public getStructures(collectionId: number): Observable<any> {
        let params = new HttpParams().set("acervo_id", collectionId);
        return this.http.get(
            environment.apiUrl + '/estrutura/', {params: params}
        )
    }

    public getStructureDetail(id: number): Observable<any> {
        return this.http.get(
            environment.apiUrl + '/estrutura/' + id + '/'
        )
    }

    public register(
        code: string,
        title: string,
        acronym: string,
        description: string,
        addInfo: string,
        collectionId: number,
        supStructureId: number | null
    ): Observable<any> {
        return this.http.post(
            environment.apiUrl + '/estrutura/', {
                codigo: code,
                titulo: title,
                sigla: acronym,
                descricao: description,
                info_adicionais: addInfo,
                acervo: collectionId,
                estrutura_nivel_superior: supStructureId
            }, 
            { responseType: 'json'}
        )
    }
}