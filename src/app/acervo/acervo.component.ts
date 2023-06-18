import { Component, OnInit } from '@angular/core';
import { Structure } from '../models/Structure.model';
import { Collection } from '../models/Collection.model';
import { faPencil } from '@fortawesome/free-solid-svg-icons';
import { ActivatedRoute, Params } from '@angular/router';
import { StructureClient } from '../clients/structure.client';
import { HttpErrorResponse } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { CollectionClient } from '../clients/collection.client';

@Component({
  selector: 'app-acervo',
  templateUrl: './acervo.component.html',
  styleUrls: ['./acervo.component.css']
})
export class AcervoComponent implements OnInit {

  structures: Structure[] = [];
  collection: Collection | null = null;
  collectionId: number = 0;

  faPencil = faPencil;

  constructor(
    private route: ActivatedRoute,
    private collectionClient: CollectionClient,
    private structureClient: StructureClient,
    private toastr: ToastrService
    ) {  }

  ngOnInit(): void {

    this.route.params.subscribe((params: Params) => {
      this.collectionId = params['id'];
    })

    this.getCollection(this.collectionId)
  }

  public getCollection (collectionId: number) {
    this.collectionClient.getCollection(collectionId).subscribe({
      next: (res) => {

        if (!!res) {
          this.collection = new Collection(res.id, res.codigo, res.titulo, res.sigla, res.descricao, res.info_adicionais, res.ordem_exibicao)

          this.getStructures(collectionId);
        } 

      },
      error: (error: HttpErrorResponse) => {
        console.log(error);
        let strError = error.error.detail;
        this.toastr.error(strError, "Não foi possível obter o acervo " + collectionId);
      }
    });
  }

  public getStructures(collectionId: number) {

    if (!!this.collection) {
      this.structureClient.getStructures(collectionId).subscribe({
        next: (res) => {
          res.forEach((item: any) => {
            let structure = new Structure(item.id, item.codigo, item.titulo, item.sigla, item.descricao, item.info_adicionais, item.nivel_estrutura,this.collection as Collection)
            this.structures.push(structure);
          });
        },
        error: (error: HttpErrorResponse) => {
          console.log(error);
          let strError = error.error.detail;
          this.toastr.error(strError, "Não foi possível obter as estruturas do acervo "+ collectionId);
        }
      });
      } 
    }


}
