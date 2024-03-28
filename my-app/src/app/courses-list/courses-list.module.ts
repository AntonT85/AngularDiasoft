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
import {FilterPipe} from "../shared/pipes/filter/filter.pipe";
import {CourseAddComponent} from './course-add/course-add.component';
import {InputTextareaModule} from "primeng/inputtextarea";
import {InputNumberModule} from "primeng/inputnumber";
import {CalendarModule} from "primeng/calendar";
import {SharedModule} from "../shared/shared.module";


@NgModule({
  declarations: [
    CoursesListComponent,
    CourseComponent,
    CourseAddComponent,
    FilterPipe,
    CourseAddComponent,
  ],
  imports: [
    CommonModule,
    ImageModule,
    ButtonModule,
    CardModule,
    InputTextModule,
    BreadcrumbModule,
    FormsModule,
    InputTextareaModule,
    InputNumberModule,
    CalendarModule,
    SharedModule,
  ],
  providers: [FilterPipe],
  exports: [CoursesListComponent]
})
export class CoursesListModule {
}
