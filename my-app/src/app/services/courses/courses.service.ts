import {Injectable} from '@angular/core';
import {ICourse} from "../../shared/interfaces/course/course.interface";

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor() {
  }

  private courses: ICourse[] = [
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

  public getList(): ICourse[] {
    return this.courses;
  }

  public createCourse(course: ICourse): void {
    course.id = this.courses.length+1;
    this.courses.push(course);
  }

  public getItemById(id: number): ICourse | undefined {
    return this.courses.find(x => x.id == id);
  }

  public updateItem(id: number, newData: ICourse): void {
    let item: ICourse | undefined = this.getItemById(id);
    if (!item) return;
    item.title = newData.title;
    item.topRated = newData.topRated;
    item.creationDate = newData.creationDate;
    item.duration = newData.duration;
    item.description = newData.description;
  }

  public removeItem(id: number): void {
    for (let i = 0; i < this.courses.length; i++) {
      if (this.courses[i]["id"] == id) {
        this.courses.splice(i, 1);
      }
    }
  }
}
