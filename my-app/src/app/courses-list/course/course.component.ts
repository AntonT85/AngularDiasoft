import {Component, EventEmitter, Input, Output} from '@angular/core';
import {ICourse} from "../../shared/course/course.interface";

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.less']
})
export class CourseComponent {
  @Input() public course: ICourse = {} as ICourse;
  @Output() editCourse: EventEmitter<ICourse> = new EventEmitter<ICourse>();
  @Output() deleteCourse: EventEmitter<ICourse> = new EventEmitter<ICourse>();

  getTimeFromMins(mins: number): string {
    let hours = Math.trunc(mins / 60);
    let minutes = mins % 60;
    return hours + 'ч. ' + minutes + 'м.';
  };

  edit(course: ICourse): void {
    this.editCourse.emit(course);
  }

  delete(course: ICourse): void {
    this.deleteCourse.emit(course);
  }
}
