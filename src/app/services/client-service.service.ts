import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { KeycloakSecurityService } from './keycloak-security.service';
import * as Routes from '../config'; 
@Injectable({
  providedIn: 'root'
})
export class ClientServiceService {
  
  constructor(
    private http: HttpClient,
    private keycloackService: KeycloakSecurityService
  ) { }

  getClients(){
    return this.http.get(Routes.CLIENT);
  }

  post(formData: FormData):Promise <any>{
    return this.http.post<any>(Routes.CLIENT,formData).toPromise();
  }
}
