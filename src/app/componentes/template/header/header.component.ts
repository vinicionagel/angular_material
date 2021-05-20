import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from "../../login/authentication.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

    constructor(private authentication: AuthenticationService, private rotas: Router) { }

    ngOnInit(): void {
    }

    logout() {
      this.authentication.logout();
      this.rotas.navigate(['/login']);
    }
}
