import {LOCALE_ID, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderComponent} from './components/header/header.component';
import {FooterComponent} from './components/footer/footer.component';
import {LogoComponent} from './components/logo/logo.component';
import {CoursesListComponent} from './courses-list/courses-list.component';
import {ToolbarModule} from 'primeng/toolbar';
import {ImageModule} from 'primeng/image';
import {ButtonModule} from 'primeng/button';
import {CourseComponent} from './courses-list/course/course.component';
import {CardModule} from 'primeng/card';
import {registerLocaleData} from '@angular/common';
import localeRu from '@angular/common/locales/ru';
import {InputTextModule} from 'primeng/inputtext';
import {BreadcrumbModule} from 'primeng/breadcrumb';
import {FormsModule} from "@angular/forms";
import {HighlightByDateDirective} from "./shared/directives/highlight-by-date.directive";
import { DurationPipe } from './shared/pipes/duration/duration.pipe';
import { OrderByPipe } from './shared/pipes/orderBy/order-by.pipe';
import { FilterPipe } from './shared/pipes/filter/filter.pipe';

registerLocaleData(localeRu, 'ru');

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LogoComponent,
    CoursesListComponent,
    CourseComponent,
    HighlightByDateDirective,
    DurationPipe,
    OrderByPipe,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ToolbarModule,
    ImageModule,
    ButtonModule,
    CardModule,
    InputTextModule,
    BreadcrumbModule,
    FormsModule
  ],
  providers: [{provide: LOCALE_ID, useValue: 'ru'}, FilterPipe],
  bootstrap: [AppComponent]
})
export class AppModule {
}
