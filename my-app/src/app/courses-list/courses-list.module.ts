import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CoursesListComponent} from "./courses-list.component";
import {CourseComponent} from "./course/course.component";
import {ImageModule} from "primeng/image";
import {ButtonModule} from "primeng/button";
import {CardModule} from "primeng/card";
import {InputTextModule} from "primeng/inputtext";
import {BreadcrumbModule} from "primeng/breadcrumb";
import {FormsModule} from "@angular/forms";
import {HighlightByDateDirective} from "../shared/directives/highlight-by-date.directive";
import {DurationPipe} from "../shared/pipes/duration/duration.pipe";
import {OrderByPipe} from "../shared/pipes/orderBy/order-by.pipe";
import {FilterPipe} from "../shared/pipes/filter/filter.pipe";


@NgModule({
  declarations: [
    CoursesListComponent,
    CourseComponent,
    HighlightByDateDirective,
    DurationPipe,
    OrderByPipe,
    FilterPipe
  ],
  imports: [
    CommonModule,
    ImageModule,
    ButtonModule,
    CardModule,
    InputTextModule,
    BreadcrumbModule,
    FormsModule,
  ],
  providers: [FilterPipe],
  exports: [CoursesListComponent]
})
export class CoursesListModule {
}
