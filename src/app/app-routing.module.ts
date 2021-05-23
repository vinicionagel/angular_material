import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./view/home/home.component";
import {LoginComponent} from "./componentes/login/login.component";
import {PessoaCreateComponent} from "./componentes/pessoa/pessoa-create/pessoa-create.component";
import {PessoaCrudComponent} from "./view/pessoa-crud/pessoa-crud.component";


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', component: LoginComponent },
  { path: 'pessoa/create', component: PessoaCreateComponent },
  { path: 'pessoa', component: PessoaCrudComponent},
  {path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
