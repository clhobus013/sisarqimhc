import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { StructureClient } from '../clients/structure.client';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-secret',
  templateUrl: './secret.component.html',
  styleUrls: ['./secret.component.css']
})
export class SecretComponent implements OnInit {

  public structures: Observable<any> = this.StructureClient.getStructures();

  constructor(
    private authenticationService: AuthenticationService,
    private StructureClient: StructureClient
  ) { }

  ngOnInit(): void {
  }

  logout(): void {
    this.authenticationService.logout();
  }

}
