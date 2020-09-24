import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TranslateModule, TranslateLoader, TranslateService } from '@ngx-translate/core';
import { HttpClientModule, HTTP_INTERCEPTORS, HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { CarnetComponent } from './components/carnet/carnet.component';
import { ClientComponent } from './components/client/client.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { KeycloakSecurityService } from './services/keycloak-security.service';
import { KeycloakInterceptor } from './keycloak-interceptor/keycloak-interceptor';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
export function kcFactory(keycloakSecurity: KeycloakSecurityService) {
  return () => {
    keycloakSecurity.init();
  }
}
@NgModule({
  declarations: [
    AppComponent,
    CarnetComponent,
    ClientComponent,
    NavBarComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    NoopAnimationsModule,

  ],
  providers: [TranslateService,
    { provide: APP_INITIALIZER, deps: [KeycloakSecurityService], multi: true, useFactory: kcFactory },
    { provide: HTTP_INTERCEPTORS, useClass: KeycloakInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
