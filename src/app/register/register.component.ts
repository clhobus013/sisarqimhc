import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { UntypedFormGroup, UntypedFormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public register!: UntypedFormGroup;

  constructor(
    private authenticationService: AuthenticationService
  ) { }

  ngOnInit(): void {
    this.register = new UntypedFormGroup({
      firstName: new UntypedFormControl('', Validators.required),
      lastName: new UntypedFormControl('', Validators.required),
      username: new UntypedFormControl('', Validators.required),
      email: new UntypedFormControl('', Validators.required),
      phoneNumber: new UntypedFormControl('', Validators.required),
      cpf: new UntypedFormControl('', Validators.required),
      password: new UntypedFormControl('', Validators.required),
      confPassword: new UntypedFormControl('', Validators.required),
    })
  }

  public onSubmit() {
    this.authenticationService.register(
      this.register.get('firstName')!.value,
      this.register.get('lastName')!.value,
      this.register.get('username')!.value,
      this.register.get('email')!.value,
      this.register.get('phoneNumber')!.value,
      this.register.get('cpf')!.value,
      this.register.get('password')!.value,
      this.register.get('confPassword')!.value,
    )
  }

}
