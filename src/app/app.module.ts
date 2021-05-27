import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";

import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './componentes/template/header/header.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from "@angular/material/card";
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";
import { MatListModule } from "@angular/material/list";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { MatTabsModule } from "@angular/material/tabs";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatTableModule } from "@angular/material/table";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatSortModule } from "@angular/material/sort";
import {MatIconModule} from "@angular/material/icon";

import { FooterComponent } from './componentes/template/footer/footer.component';
import { NavComponent } from './componentes/template/nav/nav.component'

import { MatSidenavModule } from '@angular/material/sidenav'
import { LoginComponent } from './componentes/login/login.component';
import { HomeComponent } from './view/home/home.component';
import { RedDirective } from './componentes/directives/red.directive';
import { ForDirective } from './componentes/directives/for.directive';
import { PessoaCreateComponent } from './componentes/pessoa/pessoa-create/pessoa-create.component';
import { PessoaCrudComponent } from './view/pessoa-crud/pessoa-crud.component';
import { HttpLoginInterceptor } from "./http-login-interceptor.service";
import { PessoaReadComponent } from './componentes/pessoa/pessoa-read/pessoa-read.component';
import { EnderecoComponent } from './componentes/endereco/endereco/endereco.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    LoginComponent,
    HomeComponent,
    RedDirective,
    ForDirective,
    PessoaCreateComponent,
    PessoaCrudComponent,
    PessoaReadComponent,
    EnderecoComponent
  ],
  imports: [
    BrowserModule,
    MatToolbarModule,
    AppRoutingModule,
    MatSidenavModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatFormFieldModule,
    MatTabsModule,
    FormsModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatIconModule,
    MatCardModule,
    MatInputModule,
    MatSnackBarModule,
    MatButtonModule,
    MatListModule,
    BrowserAnimationsModule
  ],
  providers: [ {
    provide: HTTP_INTERCEPTORS,
    useClass: HttpLoginInterceptor,
    multi: true
  },],
  bootstrap: [AppComponent]
})
export class AppModule { }
