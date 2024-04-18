import {ChangeDetectionStrategy, ChangeDetectorRef, Component} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {CoursesService} from "../../services/courses/courses.service";
import {ICourse} from "../../shared/interfaces/course/course.interface";
import {MenuItem} from "primeng/api";


@Component({
  selector: 'app-course-add',
  templateUrl: './course-add.component.html',
  styleUrls: ['./course-add.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CourseAddComponent {
  constructor(
    private readonly router: Router,
    private readonly route: ActivatedRoute,
    private readonly coursesService: CoursesService,
    private readonly changeDetectorRef: ChangeDetectorRef
  ) {
    this.id = route.snapshot.params['id'];
    if (this.id != null) {
      this.coursesService.getItemById(this.id).subscribe(response => {
        const course: ICourse = response;
        if (course != null) {
          this.header = "Изменение курса";
          this.title = course.title;
          this.description = course.description;
          if (course.creationDate != null)
            this.creationDate = new Date(course.creationDate);
          this.duration = course.duration;
          this.items.push({label: this.title});
          changeDetectorRef.detectChanges();
        }
      });
    }
  }

  items: MenuItem[] = [{label: 'Courses', routerLink: '/courses'}];
  home: MenuItem = {icon: 'pi pi-home'};
  public id: any;
  public title: any;
  public description: any;
  public creationDate: any;
  public duration: any;
  header:string="Новый курс";

  public cancel(): void {
    this.router.navigate(['courses']);
  }

  public save(): void {
    let newData: ICourse = {
      id: this.id,
      title: this.title,
      creationDate: this.creationDate,
      duration: this.duration,
      description: this.description,
      topRated: false
    };
    if (this.id != null) {
      this.coursesService.updateItem(this.id, newData).subscribe()
    } else {
      this.coursesService.createCourse(newData).subscribe();
    }
    this.router.navigate(['courses']);
  }

  public onMinutesChange(minutes: any): void {
    this.duration = minutes;
  }

}
