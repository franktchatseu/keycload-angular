import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { KeycloakSecurityService } from './keycloak-security.service';

@Injectable({
  providedIn: 'root'
})
export class ClientServiceService {

  constructor(
    private http: HttpClient,
    private keycloackService: KeycloakSecurityService
  ) { }

  getClients(){
    return this.http.get("http://localhost:8080/clients");
  }
}
