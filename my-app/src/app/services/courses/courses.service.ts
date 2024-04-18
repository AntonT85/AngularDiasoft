import {Injectable} from '@angular/core';
import {ICourse} from "../../shared/interfaces/course/course.interface";
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  private readonly coursesUrl = "http://localhost:3000";

  constructor(private readonly httpClient: HttpClient) {
  }

  public getList(page: number, field: string): Observable<ICourse[]> {
    if (!page) page = 1;
    let count = 10 * page;
    let params = new HttpParams().set('_limit', count);
    if (field != null && field != "") {
      params = params.set('q', field);
    }
    return this.httpClient.get<ICourse[]>(`${this.coursesUrl}/videocourses`, {params});
  }

  public createCourse(course: ICourse): Observable<ICourse> {
    return this.httpClient.post<ICourse>(`${this.coursesUrl}/videocourses`, course);
  }

  public getItemById(id: number): Observable<ICourse> {
    return this.httpClient.get<ICourse>(`${this.coursesUrl}/videocourses/${id}`);
  }

  public updateItem(id: number, newData: ICourse): Observable<ICourse> {
    return this.httpClient.put<ICourse>(`${this.coursesUrl}/videocourses/${id}`, newData);
  }

  public removeItem(id: number): Observable<any> {
    return this.httpClient.delete<ICourse>(`${this.coursesUrl}/videocourses/${id}`);
  }
}
