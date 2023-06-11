import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { StructureClient } from '../clients/structure.client';
import { Observable } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-secret',
  templateUrl: './secret.component.html',
  styleUrls: ['./secret.component.css']
})
export class SecretComponent implements OnInit {

  public structures: any[] = [];

  constructor(
    private authenticationService: AuthenticationService,
    private StructureClient: StructureClient
  ) { }

  ngOnInit(): void {

    this.StructureClient.getStructures().subscribe({
      next: (res) => {
        console.log("Obteu estrutura", res)
        this.structures = res;
      },
      error: (error: HttpErrorResponse) => {
        console.log("Erro ao obter estrutura", error);
      }
    });
  }

  logout(): void {
    this.authenticationService.logout();
  }

}
