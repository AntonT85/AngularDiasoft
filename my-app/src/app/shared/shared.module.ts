import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeaderComponent} from "../components/header/header.component";
import {FooterComponent} from "../components/footer/footer.component";
import {LogoComponent} from "../components/logo/logo.component";
import {ImageModule} from "primeng/image";
import {ButtonModule} from "primeng/button";
import {AuthorComponent} from "../components/author/author.component";
import {SelectMinutesComponent} from "../components/select-minutes/select-minutes.component";
import {DurationPipe} from "./pipes/duration/duration.pipe";
import {InputNumberModule} from "primeng/inputnumber";
import {FormsModule} from "@angular/forms";
import {HighlightByDateDirective} from "./directives/highlight-by-date.directive";
import {OrderByPipe} from "./pipes/orderBy/order-by.pipe";
import {AutoCompleteModule} from "primeng/autocomplete";
import {SearchComponent} from "../components/search/search.component";
import {InputTextModule} from "primeng/inputtext";


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    LogoComponent,
    AuthorComponent,
    SelectMinutesComponent,
    DurationPipe,
    HighlightByDateDirective,
    OrderByPipe,
    SearchComponent,
  ],
  imports: [
    CommonModule,
    ImageModule,
    ButtonModule,
    InputNumberModule,
    InputTextModule,
    FormsModule,
    AutoCompleteModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    LogoComponent,
    AuthorComponent,
    SelectMinutesComponent,
    DurationPipe,
    HighlightByDateDirective,
    OrderByPipe,
    SearchComponent,
  ]
})
export class SharedModule {
}
