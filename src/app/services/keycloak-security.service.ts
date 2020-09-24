import { Injectable } from '@angular/core';
import { KeycloakInstance } from 'keycloak-js';
declare var Keycloak: any;

@Injectable({
  providedIn: 'root'
})
export class KeycloakSecurityService {
  public kc: KeycloakInstance;
  constructor() { }

  async init(){
    console.log("security initialisation");
    this.kc = new Keycloak(
      {
        url:"http://localhost:8180/auth/",
        realm: "keycloadSpringoot",
        clientId:"bocobi2-angular-app"
      }
    );
    await this.kc.init(
      {
       // onLoad: "login-required", oblige une authentification au demarage de application
        onLoad: "check-sso", //regarge les cookies de utilisateur et authentifie s'il possede deja un token valide
      }
    )
    console.log(this.kc.token)
  }

}
