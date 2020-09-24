import { Component, OnInit } from '@angular/core';
import { KeycloakSecurityService } from 'src/app/services/keycloak-security.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styles: []
})
export class NavBarComponent implements OnInit {

  constructor(
    private keyclockServive: KeycloakSecurityService
  ) { }

  ngOnInit() {
  }

  onLogout(){
    this.keyclockServive.kc.logout();
  }
  
  onLogin(){
    this.keyclockServive.kc.login();
  }
  
  onChangePassword(){
    this.keyclockServive.kc.accountManagement();
  }
}
