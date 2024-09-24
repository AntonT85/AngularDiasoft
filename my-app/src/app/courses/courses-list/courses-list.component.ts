import {Component} from '@angular/core';
import {ConfirmationService, MenuItem} from "primeng/api";
import {Router} from "@angular/router";
import {CoursesService} from "../../services/courses/courses.service";
import {ICourse} from "../../shared/interfaces/course/course.interface";
import {FilterPipe} from "../../shared/pipes/filter/filter.pipe";
import {take, tap} from "rxjs";

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.less']
})
export class CoursesListComponent {
  items: MenuItem[] = [{label: 'Courses', routerLink: '/courses'}];
  home: MenuItem = {icon: 'pi pi-home'};

  public coursesList: ICourse[] = [];
  search: any;
  page: number = 1;

  constructor(
    private filter: FilterPipe,
    private readonly coursesService: CoursesService,
    private confirmationService: ConfirmationService,
    private readonly router: Router
  ) {
    this.doSearch();
  }

  public clearFilter(): void {
    this.search = "";
    this.page = 1;
    this.doSearch();
  }

  public loadMore(): void {
    this.page++;
    this.doSearch();
  }

  onEditedCourse(course: ICourse): void {
    this.router.navigate(['courses/' + course.id]);
  }

  onDeletedCourse(course: ICourse): void {
    this.confirmationService.confirm({
      header: 'Удалить курс?',
      message: `Вы действительно хотите удалить этот курс ${course.title}?`,
      key: 'confirmDeleteAlert',
      accept: () => {
        this.coursesService.removeItem(course.id).pipe(
          take(1),
          tap(() => this.doSearch())
        ).subscribe();
      },
      reject: () => {
      },
    });

  }

  doSearch(): void {
    this.coursesService.getList(this.page, this.search).subscribe((result) => this.coursesList = result);
  }

  addCourse(): void {
    this.router.navigate(['courses/new']);
  }
}
