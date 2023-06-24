import { Component, OnInit } from '@angular/core';
import { Structure } from '../models/Structure.model';
import { Collection } from '../models/Collection.model';
import { faPencil } from '@fortawesome/free-solid-svg-icons';
import { Document } from '../models/Document.model';
import { CollectionClient } from '../clients/collection.client';
import { ActivatedRoute, Params } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { HttpErrorResponse } from '@angular/common/http';
import { StructureClient } from '../clients/structure.client';

@Component({
  selector: 'app-structure',
  templateUrl: './structure.component.html',
  styleUrls: ['./structure.component.css']
})
export class StructureComponent implements OnInit {

  documents: Document[] = [];
  structure!: Structure;
  collection!: Collection;

  structureId! : number;
  collectionId! : number;

  faPencil = faPencil;

  constructor(
    private route: ActivatedRoute,
    private StructureClient: StructureClient,
    private CollectionClient: CollectionClient,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {

    this.route.params.subscribe((params: Params) => {
      this.structureId = parseInt(params['id']);
      this.getStructure(this.structureId);
    })

    this.documents.push(new Document(0, "ABC", "Titulo documento 01", "ABC", "Descricao do documento 01", new Date, new Date, "Informações adicionais", "Genero 01", 0, true))

    this.documents.push(new Document(0, "ABC", "Titulo documento 01", "ABC", "Descricao do documento 01", new Date, new Date, "Informações adicionais", "Genero 01", 0, true))


  }

  public getStructure (id: number) {
    this.StructureClient.getStructureDetail(id).subscribe({
      next: (res) => {

        if (!!res) {
          
          this.structure = new Structure(res.id, res.codigo,res.titulo, res.sigla, res.descricao, res.info_adicionais, res.nivel_estrutura, res.acervo)
          
          this.getCollection(res.acervo);
        }
      },
      error: (error: HttpErrorResponse) => {
        console.log(error);
        let strError = error.error.detail;
        this.toastr.error(strError, "Não foi possível obter a estrutura");
      }
    })
  }

  public getCollection (collectionId: number) {
    this.CollectionClient.getCollection(collectionId).subscribe({
      next: (res) => {
        if (!!res) {
          this.collection = new Collection(res.id, res.codigo, res.titulo, res.sigla, res.descricao, res.info_adicionais, res.ordem_exibicao)

          this.structure.setCollection(this.collection)
        }
      },
      error: (error: HttpErrorResponse) => {
        console.log(error);
        let strError = error.error.detail;
        this.toastr.error(strError, "Não foi possível obter o acervo");
      }
    })
  }

}
