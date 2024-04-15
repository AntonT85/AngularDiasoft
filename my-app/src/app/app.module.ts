import {LOCALE_ID, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {registerLocaleData} from '@angular/common';
import localeRu from '@angular/common/locales/ru';
import {ConfirmationService} from "primeng/api";
import {ConfirmDialogModule} from "primeng/confirmdialog";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {LoginPageModule} from "./login-page/login-page.module";
import {SharedModule} from "./shared/shared.module";
import {NotFoundComponent} from './components/not-found/not-found.component';
import {CardModule} from "primeng/card";

registerLocaleData(localeRu, 'ru');

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoginPageModule,
    ConfirmDialogModule,
    BrowserAnimationsModule,
    SharedModule,
    CardModule,
  ],
  providers: [{provide: LOCALE_ID, useValue: 'ru'}, ConfirmationService],
  bootstrap: [AppComponent]
})
export class AppModule {
  /*
    constructor(router: Router) {
      const replacer = (key: string, value: any): string =>
        typeof value === 'function' ? value.name : value;
      console.log('Routes ', JSON.stringify(router.config, replacer, 2));
    }
  */
}
