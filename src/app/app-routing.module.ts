import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./componentes/home/home.component";
import {LoginHomeComponent} from "./componentes/login-home/login-home.component";

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', component: LoginHomeComponent },
  {path: 'login', component: LoginHomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
