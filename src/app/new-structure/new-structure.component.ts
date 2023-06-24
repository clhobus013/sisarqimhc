import { Component, OnInit } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { StructureClient } from '../clients/structure.client';
import { HttpErrorResponse } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-new-structure',
  templateUrl: './new-structure.component.html',
  styleUrls: ['./new-structure.component.css']
})
export class NewStructureComponent implements OnInit {

  public registerForm!: UntypedFormGroup;
  collectionId: number = 0;
  supStructureId: number | null = null;

  constructor(
    private route: ActivatedRoute,
    private router: Router, 
    private StructureCliente: StructureClient,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {

    this.route.params.subscribe((params: Params) => {
      this.collectionId = parseInt(params['id']);
      this.supStructureId = parseInt(params['supStructureId']);
      console.log("Colecao id ", this.collectionId)
      console.log("Estrutura superior ", this.supStructureId)
    })

    this.registerForm = new UntypedFormGroup({
      code: new UntypedFormControl('', Validators.required),
      title: new UntypedFormControl('', Validators.required),
      acronym: new UntypedFormControl('', Validators.required),
      description: new UntypedFormControl('', Validators.required),
      addInfo: new UntypedFormControl('', Validators.required)
    })
    
  }

  public onSubmit() {
    this.StructureCliente.register(
      this.registerForm.get('code')!.value,
      this.registerForm.get('title')!.value,
      this.registerForm.get('acronym')!.value,
      this.registerForm.get('description')!.value,
      this.registerForm.get('addInfo')!.value,
      this.collectionId,
      this.supStructureId
    ).subscribe({
      next: (res) => {
        if (!!res) {
          this.router.navigate(['estrutura', res.id])
          this.toastr.success("Estrutura cadastrada com sucesso")
          console.log("Resposta", res)
        }
      },
      error: (error: HttpErrorResponse) => {
        console.log(error);
        let strError = error.error.detail;
        this.toastr.error(strError, "Não foi possível salvar os dados");
      }
    })
  }

}
