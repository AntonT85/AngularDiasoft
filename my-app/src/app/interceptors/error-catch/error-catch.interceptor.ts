import {Injectable} from '@angular/core';
import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {catchError} from "rxjs/operators";
import {MessageService} from "primeng/api";

@Injectable()
export class ErrorCatchInterceptor implements HttpInterceptor {

  constructor(private readonly messageService: MessageService) {
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request)
      .pipe(
        catchError((error: HttpErrorResponse) => {
            this.messageService.add({severity: 'error', summary: 'Error', detail: error.status + ': ' + error.message});
            return of();
          }
        )
      )
  }
}
