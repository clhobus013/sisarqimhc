import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { StructureClient } from '../clients/structure.client';
import { HttpErrorResponse } from '@angular/common/http';
import { Structure } from '../models/Structure.model';
import { ToastrService } from 'ngx-toastr';
import { Collection } from '../models/Collection.model';
import { CollectionClient } from '../clients/collection.client';

@Component({
  selector: 'app-secret',
  templateUrl: './secret.component.html',
  styleUrls: ['./secret.component.css']
})
export class SecretComponent implements OnInit {

  public structures: Structure[] = [];
  public collections: Collection[] = [];

  constructor(
    private authenticationService: AuthenticationService,
    private structureClient: StructureClient,
    private collectionClient: CollectionClient,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {

    this.structureClient.getStructures(new Collection(1, '1', 'Teste', 'ABC', 'Teste', 'Teste', 1)).subscribe({
      next: (res) => {
        console.log("Resposta structure", res)

        res.forEach((item: any) => {
          let structure = new Structure(item.id, item.codigo, item.titulo, item.sigla, item.descricao, item.info_adicionais, item.nivel_estrutura, new Collection(1, '1', 'Teste', 'ABC', 'Teste', 'Teste', 1))
          this.structures.push(structure);
        });
      },
      error: (error: HttpErrorResponse) => {
        let strError = JSON.parse(error.error).error;
        this.toastr.error(strError, "Não foi possível obter as estruturas");
      }
    });

    this.collectionClient.getCollections().subscribe({
      next: (res) => {

        console.log("Resposta collections", res)

        res.forEach((item: any) => {
          let collection = new Collection(item.id, item.codigo, item.titulo, item.sigla, item.descricao, item.info_adicionais, item.ordem_exibicao)
          this.collections.push(collection);
        });
      },
      error: (error: HttpErrorResponse) => {
        let strError = JSON.parse(error.error).error;
        this.toastr.error(strError, "Não foi possível obter os acervos");
      }
    });
  }

  logout(): void {
    this.authenticationService.logout();
  }
}
