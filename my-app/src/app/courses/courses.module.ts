import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CoursesComponent} from "./courses.component";
import {CourseComponent} from "./course/course.component";
import {CoursesListComponent} from "./courses-list/courses-list.component";
import {ImageModule} from "primeng/image";
import {ButtonModule} from "primeng/button";
import {CardModule} from "primeng/card";
import {InputTextModule} from "primeng/inputtext";
import {BreadcrumbModule} from "primeng/breadcrumb";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {FilterPipe} from "../shared/pipes/filter/filter.pipe";
import {CourseAddComponent} from './course-add/course-add.component';
import {InputTextareaModule} from "primeng/inputtextarea";
import {InputNumberModule} from "primeng/inputnumber";
import {CalendarModule} from "primeng/calendar";
import {SharedModule} from "../shared/shared.module";
import {CoursesRoutingModule} from './courses-routing.module';


@NgModule({
  declarations: [
    CoursesComponent,
    CourseComponent,
    CourseAddComponent,
    FilterPipe,
    CoursesListComponent,
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    ImageModule,
    ButtonModule,
    CardModule,
    InputTextModule,
    BreadcrumbModule,
    InputTextareaModule,
    InputNumberModule,
    CalendarModule,
    SharedModule,
    CoursesRoutingModule,
  ],
  providers: [FilterPipe],
  exports: [CoursesComponent]
})
export class CoursesModule {
}
