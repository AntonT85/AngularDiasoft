import {Component, OnInit} from '@angular/core';
import {ICourse} from "../shared/interfaces/course/course.interface";
import {ConfirmationService, MenuItem} from "primeng/api";
import {FilterPipe} from "../shared/pipes/filter/filter.pipe";
import {CoursesService} from "../services/courses/courses.service";

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.less']
})
export class CoursesListComponent implements OnInit {
  public coursesList: ICourse[] = [];
  public coursesFilteredList: ICourse[] = [];
  items: MenuItem[] = [{label: 'Courses'}];
  home: MenuItem = {icon: 'pi pi-home', routerLink: '/'};
  search: any;
  public addMode: boolean = false;

  constructor(
    private filter: FilterPipe,
    private readonly coursesService: CoursesService,
    private confirmationService: ConfirmationService
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
    console.log(course);
  }

  onDeletedCourse(course: ICourse): void {
    this.confirmationService.confirm({
      header: 'Удалить курс?',
      message: `Вы действительно хотите удалить этот курс ${course.title}?`,
      key: 'confirmDeleteAlert',
      accept: () => this.coursesService.removeItem(course.id),
      reject: () => {
      },
    });

  }

  doSearch(): void {
    this.coursesFilteredList = this.filter.transform(this.coursesList, 'title', this.search);
  }

  addCourse(): void {
    this.addMode = true;
  }
}
