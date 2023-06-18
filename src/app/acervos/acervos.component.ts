import { Component, OnInit } from '@angular/core';
import { Collection } from '../models/Collection.model';
import { CollectionClient } from '../clients/collection.client';
import { HttpErrorResponse } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-acervos',
  templateUrl: './acervos.component.html',
  styleUrls: ['./acervos.component.css']
})
export class AcervosComponent implements OnInit {

  collections: Collection[] = [];

  constructor(
    private collectionClient: CollectionClient,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.getCollections();
  }

  public getCollections () {
    this.collectionClient.getCollections().subscribe({
      next: (res) => {

        res.forEach((item: any) => {
          let collection = new Collection(item.id, item.codigo, item.titulo, item.sigla, item.descricao, item.info_adicionais, item.ordem_exibicao)
          this.collections.push(collection);
        });
        
      },
      error: (error: HttpErrorResponse) => {
        console.log(error);
        let strError = error.error.detail;
        this.toastr.error(strError, "Não foi possível obter os acervos");
      }
    });
  }

}
