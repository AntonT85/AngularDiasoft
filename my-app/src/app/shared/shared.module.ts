import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeaderComponent} from "../components/header/header.component";
import {FooterComponent} from "../components/footer/footer.component";
import {LogoComponent} from "../components/logo/logo.component";
import {ImageModule} from "primeng/image";
import {ButtonModule} from "primeng/button";
import {AutorComponent} from "../components/autor/autor.component";
import {SelectMinutesComponent} from "../components/select-minutes/select-minutes.component";
import {DurationPipe} from "./pipes/duration/duration.pipe";
import {InputNumberModule} from "primeng/inputnumber";
import {FormsModule} from "@angular/forms";
import {HighlightByDateDirective} from "./directives/highlight-by-date.directive";
import {OrderByPipe} from "./pipes/orderBy/order-by.pipe";


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    LogoComponent,
    AutorComponent,
    SelectMinutesComponent,
    DurationPipe,
    HighlightByDateDirective,
    OrderByPipe,
  ],
  imports: [
    CommonModule,
    ImageModule,
    ButtonModule,
    InputNumberModule,
    FormsModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    LogoComponent,
    AutorComponent,
    SelectMinutesComponent,
    DurationPipe,
    HighlightByDateDirective,
    OrderByPipe,
  ]
})
export class SharedModule {
}
