import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./componentes/home/home.component";
import {LoginHomeComponent} from "./componentes/login-home/login-home.component";
import {NavComponent} from "./componentes/template/nav/nav.component";
import {LoginComponent} from "./componentes/login/login.component";

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', component: LoginComponent },
  {path: 'login', component: LoginHomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
