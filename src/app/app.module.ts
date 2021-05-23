import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";

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
import {MatSnackBarModule} from "@angular/material/snack-bar";

import { FooterComponent } from './componentes/template/footer/footer.component';
import { NavComponent } from './componentes/template/nav/nav.component'

import { MatSidenavModule } from '@angular/material/sidenav'
import { LoginComponent } from './componentes/login/login.component';
import { HomeComponent } from './view/home/home.component';
import { RedDirective } from './componentes/directives/red.directive';
import { ForDirective } from './componentes/directives/for.directive';
import { PessoaCreateComponent } from './componentes/pessoa/pessoa-create/pessoa-create.component';
import { PessoaCrudComponent } from './view/pessoa-crud/pessoa-crud.component';

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
    PessoaCrudComponent
  ],
  imports: [
    BrowserModule,
    MatToolbarModule,
    AppRoutingModule,
    MatSidenavModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatCardModule,
    MatInputModule,
    MatSnackBarModule,
    MatButtonModule,
    MatListModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
