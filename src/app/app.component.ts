import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: []
})
export class AppComponent {

  defaultLang: string = 'en'

  constructor(
    private translate: TranslateService,
  ) {
    this.translate.use(this.defaultLang);

  }

  setInEnglish() {
    this.translate.use('en')
  }
  setInFrench() {
    this.translate.use('fr')
  }
  title = 'quickUpdateAngular';
}
