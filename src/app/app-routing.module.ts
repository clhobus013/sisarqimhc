import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './helpers/auth.guard';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AcervosComponent } from './acervos/acervos.component';
import { AcervoComponent } from './acervo/acervo.component';
import { StructureComponent } from './structure/structure.component';

const routes: Routes = [
  {
    path: '',
    canActivate: [AuthGuard],
    component: AcervosComponent
  },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'acervos', component: AcervosComponent },
  { path: 'acervo/:id', component: AcervoComponent },
  { path: 'estrutura', component: StructureComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }