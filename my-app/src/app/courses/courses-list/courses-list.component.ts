import {Component, OnInit} from '@angular/core';
import {ConfirmationService, MenuItem} from "primeng/api";
import {Router} from "@angular/router";
import {CoursesService} from "../../services/courses/courses.service";
import {ICourse} from "../../shared/interfaces/course/course.interface";
import {FilterPipe} from "../../shared/pipes/filter/filter.pipe";

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.less']
})
export class CoursesListComponent implements OnInit {
  items: MenuItem[] = [{label: 'Courses', routerLink: '/courses'}];
  home: MenuItem = {icon: 'pi pi-home'};
  public coursesList: ICourse[] = [];
  public coursesFilteredList: ICourse[] = [];
  search: any;

  constructor(
    private filter: FilterPipe,
    private readonly coursesService: CoursesService,
    private confirmationService: ConfirmationService,
    private readonly router: Router
  ) {
  }

  ngOnInit(): void {
    this.coursesList = this.coursesService.getList();
    this.coursesFilteredList = this.coursesList;
  }

  public clearFilter(): void {
    this.search = "";
  }

  public loadMore(): void {
    console.log('loadMore');
  }

  onEditedCourse(course: ICourse): void {
    //console.log(course);
    this.router.navigate(['courses/' + course.id]);
  }

  onDeletedCourse(course: ICourse): void {
    this.confirmationService.confirm({
      header: 'Удалить курс?',
      message: `Вы действительно хотите удалить этот курс ${course.title}?`,
      key: 'confirmDeleteAlert',
      accept: () => {
        this.coursesService.removeItem(course.id);
        this.doSearch();
      },
      reject: () => {
      },
    });

  }

  doSearch(): void {
    this.coursesFilteredList = this.filter.transform(this.coursesList, 'title', this.search);
  }

  addCourse(): void {
    this.router.navigate(['courses/new']);
  }
}
