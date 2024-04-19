import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {SpinnerService} from "../spinner/spinner.service";
import {Observable} from "rxjs";
import {IAuthor} from "../../shared/interfaces/author/IAuthor";

@Injectable({
  providedIn: 'root'
})
export class AuthorService {
  private readonly authorUrl = "http://localhost:3000";

  constructor(private readonly httpClient: HttpClient, private readonly spinnerService: SpinnerService) {
  }

  public getList(field: string): Observable<IAuthor[]> {
    //this.spinnerService.setShowFlag(true);
    let params = new HttpParams();
    if (field != null && field != "") {
      params = params.set('q', field);
    }
    return this.httpClient.get<IAuthor[]>(`${this.authorUrl}/authors`, {params})
      .pipe(
        //delay(1000),
        //tap(() => this.spinnerService.setShowFlag(false))
      );
  }
}
