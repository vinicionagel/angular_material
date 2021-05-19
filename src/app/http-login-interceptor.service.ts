import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor, HttpHeaders
} from '@angular/common/http';
import { Observable } from 'rxjs';
import {Router} from "@angular/router";
import {AuthenticationService} from "./componentes/login/authentication.service";

@Injectable()
export class HttpLoginInterceptor implements HttpInterceptor {

  constructor(private authenticationService: AuthenticationService, private router: Router) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if (this.authenticationService.isUserLoggedIn()) {
      const authReq = request.clone({
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          Authorization: `Basic ${window.btoa(`${this.authenticationService.username}:${this.authenticationService.password}`)}`
        })
      });
      return next.handle(authReq);
    } else {
      this.router.navigate(['/']);
      return next.handle(request);
    }
  }
}
