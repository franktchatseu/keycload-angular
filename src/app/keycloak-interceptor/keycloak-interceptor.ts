import { HttpInterceptor, HttpHandler, HttpRequest, HttpEvent } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { KeycloakSecurityService } from '../services/keycloak-security.service';

@Injectable()
export class KeycloakInterceptor implements HttpInterceptor {

  constructor(private keycloakService: KeycloakSecurityService){}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if(this.keycloakService.kc.authenticated) {
        console.log("keycloak interceptor worked")
      const request = req.clone({ 
        headers: req.headers.set('Authorization', `Bearer ${this.keycloakService.kc.token}`),
      });
      return next.handle(request);
    } else {
      return next.handle(req);
    }
  }
}