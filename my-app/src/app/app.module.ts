import {LOCALE_ID, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {registerLocaleData} from '@angular/common';
import localeRu from '@angular/common/locales/ru';
import {CoursesListModule} from "./courses-list/courses-list.module";
import {ConfirmationService} from "primeng/api";
import {ConfirmDialogModule} from "primeng/confirmdialog";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {LoginPageModule} from "./login-page/login-page.module";
import {SharedModule} from "./shared/shared.module";

registerLocaleData(localeRu, 'ru');

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoginPageModule,
    CoursesListModule,
    ConfirmDialogModule,
    BrowserAnimationsModule,
    SharedModule
  ],
  providers: [{provide: LOCALE_ID, useValue: 'ru'}, ConfirmationService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
