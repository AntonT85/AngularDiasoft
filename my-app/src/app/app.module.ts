import {LOCALE_ID, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {registerLocaleData} from '@angular/common';
import localeRu from '@angular/common/locales/ru';
import {ConfirmationService, MessageService} from "primeng/api";
import {ConfirmDialogModule} from "primeng/confirmdialog";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {LoginPageModule} from "./login-page/login-page.module";
import {SharedModule} from "./shared/shared.module";
import {NotFoundComponent} from './components/not-found/not-found.component';
import {CardModule} from "primeng/card";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {TokenInterceptor} from "./interceptors/token/token.interceptor";
import {SpinnerComponent} from './components/spinner/spinner.component';
import {ProgressSpinnerModule} from "primeng/progressspinner";
import {ErrorCatchInterceptor} from "./interceptors/error-catch/error-catch.interceptor";
import {ToastModule} from "primeng/toast";
import {StoreModule} from '@ngrx/store';
import {metaReducers, reducers} from './store';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {environment} from "./environments/environment";
import {EffectsModule} from '@ngrx/effects';
import {AuthEffectsEffects} from './store/auth/effects/auth-effects.effects';
import {CoursesEffectsEffects} from "./store/courses/effects/courses-effects.effects";

registerLocaleData(localeRu, 'ru');

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    SpinnerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoginPageModule,
    ConfirmDialogModule,
    BrowserAnimationsModule,
    SharedModule,
    CardModule,
    HttpClientModule,
    ProgressSpinnerModule,
    ToastModule,
    StoreModule.forRoot(reducers, {metaReducers}),
    !environment.production ? StoreDevtoolsModule.instrument({maxAge: 25}) : [],
    EffectsModule.forRoot([CoursesEffectsEffects, AuthEffectsEffects]),
  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'ru'},
    ConfirmationService,
    MessageService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorCatchInterceptor,
      multi: true
    }
  ],
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
