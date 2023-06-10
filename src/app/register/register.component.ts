import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public register!: FormGroup;

  constructor(
    private authenticationService: AuthenticationService
  ) { }

  ngOnInit(): void {
    this.register = new FormGroup({
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      username: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      phoneNumber: new FormControl('', Validators.required),
      cpf: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      confPassword: new FormControl('', Validators.required),
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
