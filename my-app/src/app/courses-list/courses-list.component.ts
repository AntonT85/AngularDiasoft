import {Component, OnInit} from '@angular/core';
import {ICourse} from "../shared/course/course.interface";
import {MenuItem} from "primeng/api";

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.less']
})
export class CoursesListComponent implements OnInit {
  public coursesList: ICourse[] = [];
  items: MenuItem[] = [{label: 'Courses'}];
  home: MenuItem = {icon: 'pi pi-home', routerLink: '/'};
  search: any;

  ngOnInit(): void {
    this.coursesList = [
      {
        id: 1,
        title: 'Программирование',
        creationDate: new Date(2024, 3, 1),
        duration: 900,
        description: 'Тестирование, фронтенд, бэкенд, DevOps, алгоритмы'
      },
      {
        id: 2,
        title: 'Анализ данных',
        creationDate: new Date(2024, 4, 10),
        duration: 560,
        description: 'SQL, аналитика, Dara Science и архитектура данных'
      },
      {
        id: 3,
        title: 'Дизайн',
        creationDate: new Date(2024, 5, 2),
        duration: 420,
        description: 'Графический, интерфейсный и продуктовый'
      }
    ]
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
    console.log(this.search);
  }
}
