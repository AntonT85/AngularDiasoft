import {Injectable} from '@angular/core';
import {ICourse} from "../../shared/interfaces/course/course.interface";
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable, tap} from "rxjs";
import {SpinnerService} from "../spinner/spinner.service";
import {delay} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  private readonly coursesUrl = "http://localhost:3000";

  constructor(private readonly httpClient: HttpClient, private readonly spinnerService: SpinnerService) {
  }

  public getList(limit: number, field: string): Observable<ICourse[]> {
    this.spinnerService.setShowFlag(true);
    if (!limit) limit = 10;
    let params = new HttpParams().set('_limit', limit);
    if (field != null && field != "") {
      params = params.set('q', field);
    }
    return this.httpClient.get<ICourse[]>(`${this.coursesUrl}/videocourses`, {params})
      .pipe(
        delay(1000),
        tap(() => this.spinnerService.setShowFlag(false))
      );
  }

  public createCourse(course: ICourse): Observable<ICourse> {
    this.spinnerService.setShowFlag(true);
    return this.httpClient.post<ICourse>(`${this.coursesUrl}/videocourses`, course)
      .pipe(
        delay(1000),
        tap(() => this.spinnerService.setShowFlag(false))
      );
  }

  public getItemById(id: number): Observable<ICourse> {
    this.spinnerService.setShowFlag(true);
    return this.httpClient.get<ICourse>(`${this.coursesUrl}/videocourses/${id}`)
      .pipe(
        delay(1000),
        tap(() => this.spinnerService.setShowFlag(false))
      );
  }

  public updateItem(id: number, newData: ICourse): Observable<ICourse> {
    this.spinnerService.setShowFlag(true);
    return this.httpClient.put<ICourse>(`${this.coursesUrl}/videocourses/${id}`, newData)
      .pipe(
        delay(1000),
        tap(() => this.spinnerService.setShowFlag(false))
      );
  }

  public removeItem(id: string): Observable<any> {
    this.spinnerService.setShowFlag(true);
    return this.httpClient.delete<ICourse>(`${this.coursesUrl}/videocourses/${id}`)
      .pipe(
        delay(1000),
        tap(() => this.spinnerService.setShowFlag(false))
      );
  }
}
