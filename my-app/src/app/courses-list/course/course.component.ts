import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import {ICourse} from "../../shared/interfaces/course/course.interface";

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CourseComponent {
  @Input() public course: ICourse = {} as ICourse;
  @Output() editCourse: EventEmitter<ICourse> = new EventEmitter<ICourse>();
  @Output() deleteCourse: EventEmitter<ICourse> = new EventEmitter<ICourse>();

  edit(course: ICourse): void {
    this.editCourse.emit(course);
  }

  delete(course: ICourse): void {
    this.deleteCourse.emit(course);
  }
}
