import { Component, OnInit } from '@angular/core';
import { Structure } from '../models/Structure.model';
import { Collection } from '../models/Collection.model';
import { faPencil } from '@fortawesome/free-solid-svg-icons';
import { Document } from '../models/Document.model';

@Component({
  selector: 'app-structure',
  templateUrl: './structure.component.html',
  styleUrls: ['./structure.component.css']
})
export class StructureComponent implements OnInit {

  documents: Document[] = [];
  structure: Structure;
  collection: Collection;

  faPencil = faPencil;

  constructor() {
    this.collection = new Collection(0, 'ABC', 'Colecao 01', 'ABC', 'Descricao do acervo 01', 'Informacao adicional do acervo', 1);

    this.structure = new Structure(0, "ABC", "Estrutura 01", "ABC", "Descricao da estrutura 01", "Indormacoes adicionais da estrutura 01", 1, this.collection)
  }

  ngOnInit(): void {

    this.collection = new Collection(0, 'ABC', 'Colecao 01', 'ABC', 'Descricao do acervo 01', 'Informacao adicional do acervo', 1);

    this.structure = new Structure(0, "ABC", "Estrutura 01", "ABC", "Descricao da estrutura 01", "Indormacoes adicionais da estrutura 01", 1, this.collection)

    this.documents.push(new Document(0, "ABC", "Titulo documento 01", "ABC", "Descricao do documento 01", new Date, new Date, "Informações adicionais", "Genero 01", 0, true))


  }

}
