import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeaderComponent} from "../components/header/header.component";
import {FooterComponent} from "../components/footer/footer.component";
import {LogoComponent} from "../components/logo/logo.component";
import {ImageModule} from "primeng/image";
import {ButtonModule} from "primeng/button";


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    LogoComponent,
  ],
  imports: [
    CommonModule,
    ImageModule,
    ButtonModule,
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    LogoComponent,
  ]
})
export class SharedModule {
}
