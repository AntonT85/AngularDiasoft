import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {CourseAddComponent} from "./course-add/course-add.component";
import {CoursesListComponent} from "./courses-list/courses-list.component";
import {AuthGuard} from "../guards/auth.guard";
import {CoursesComponent} from "./courses.component";

const routes: Routes = [
  {
    path: '', component: CoursesComponent,
    children: [
      {path: '', component: CoursesListComponent, canActivate: [AuthGuard]},
      {path: 'new', component: CourseAddComponent, canActivate: [AuthGuard]},
      {path: ':id', component: CourseAddComponent, canActivate: [AuthGuard]},
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoursesRoutingModule {
}
