import {Component, EventEmitter, Input, Output} from '@angular/core';
import {ICourse} from "../../shared/interfaces/course/course.interface";
import {ConfirmationService} from "primeng/api";

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.less']
})
export class CourseComponent {
  @Input() public course: ICourse = {} as ICourse;
  @Output() editCourse: EventEmitter<ICourse> = new EventEmitter<ICourse>();
  @Output() deleteCourse: EventEmitter<ICourse> = new EventEmitter<ICourse>();

  constructor(private confirmationService: ConfirmationService) {
  }

  edit(course: ICourse): void {
    this.editCourse.emit(course);
  }

  delete(course: ICourse): void {
    this.confirmationService.confirm({
      header: 'Удалить курс?',
      message: `Вы действительно хотите удалить этот курс ${course.title}?`,
      key: 'confirmDeleteAlert',
      accept: () => this.deleteCourse.emit(course),
      reject: () => {
      },
    });
  }
}
