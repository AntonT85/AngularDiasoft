import {Component, OnInit} from '@angular/core';
import {ICourse} from "../shared/interfaces/course/course.interface";
import {MenuItem} from "primeng/api";
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

  constructor(
    private filter: FilterPipe,
    private readonly coursesService: CoursesService
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
    this.coursesService.removeItem(course.id);
  }

  doSearch(): void {
    this.coursesFilteredList = this.filter.transform(this.coursesList, 'title', this.search);
  }
}
