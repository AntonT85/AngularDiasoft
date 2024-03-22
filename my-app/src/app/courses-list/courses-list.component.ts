import {Component, OnInit} from '@angular/core';
import {ICourse} from "../shared/interfaces/course/course.interface";
import {MenuItem} from "primeng/api";
import {FilterPipe} from "../shared/pipes/filter/filter.pipe";

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

  constructor(private filter: FilterPipe) {
  }

  ngOnInit(): void {
    this.coursesList = [
      {
        id: 1,
        title: 'Программирование',
        creationDate: new Date(2024, 3, 1),
        duration: 900,
        description: 'Тестирование, фронтенд, бэкенд, DevOps, алгоритмы',
        topRated: true
      },
      {
        id: 2,
        title: 'Анализ данных',
        creationDate: new Date(2024, 2, 1),
        duration: 560,
        description: 'SQL, аналитика, Dara Science и архитектура данных',
        topRated: false
      },
      {
        id: 3,
        title: 'Дизайн',
        creationDate: new Date(2023, 5, 2),
        duration: 50,
        description: 'Графический, интерфейсный и продуктовый',
        topRated: true
      }
    ];
    this.coursesFilteredList = this.coursesList;
  }

  public loadMore(): void {
    console.log('loadMore');
  }

  onEditedCourse(course: ICourse): void {
    console.log(course);
  }

  onDeletedCourse(course: ICourse): void {
    console.log(course.id);
  }

  doSearch(): void {
    this.coursesFilteredList = this.filter.transform(this.coursesList, 'title', this.search);
  }
}
