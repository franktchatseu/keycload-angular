import { Component, OnInit } from '@angular/core';
import { KeycloakSecurityService } from 'src/app/services/keycloak-security.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styles: []
})
export class NavBarComponent implements OnInit {

  defaultLang: string = 'en'

  constructor(
    private keyclockServive: KeycloakSecurityService,
    private translate: TranslateService,
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


  setInEnglish() {
    this.translate.use('en')
  }
  setInFrench() {
    this.translate.use('fr')
  }
}
