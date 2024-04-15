import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoginPageComponent} from './login-page.component';
import {SharedModule} from "../shared/shared.module";
import {CardModule} from "primeng/card";
import {ButtonModule} from "primeng/button";
import {InputTextModule} from "primeng/inputtext";
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    LoginPageComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    CardModule,
    ButtonModule,
    FormsModule,
    InputTextModule
  ],
  exports: [LoginPageComponent]
})
export class LoginPageModule {
}
