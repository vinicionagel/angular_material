import { Component } from '@angular/core';
import {AuthenticationService} from "./componentes/login/authentication.service";

@Component({
  selector: 'app-root', //significa que é o componente que vai ser carregado no index seletor...
  templateUrl: 'app.componente.html'
})
export class AppComponent {

  constructor(private authenticationService: AuthenticationService) {

  }

  isLogado(): boolean{
    return this.authenticationService.isUserLoggedIn();
  }

}
