import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { UntypedFormGroup, UntypedFormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public registerForm!: UntypedFormGroup;

  constructor(
    private authenticationService: AuthenticationService
  ) { }

  ngOnInit(): void {
    this.registerForm = new UntypedFormGroup({
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
      this.registerForm.get('firstName')!.value,
      this.registerForm.get('lastName')!.value,
      this.registerForm.get('username')!.value,
      this.registerForm.get('email')!.value,
      this.registerForm.get('phoneNumber')!.value,
      this.registerForm.get('cpf')!.value,
      this.registerForm.get('password')!.value,
      this.registerForm.get('confPassword')!.value,
    )
  }

}
