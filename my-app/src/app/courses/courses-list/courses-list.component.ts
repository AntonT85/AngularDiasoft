import {Component} from '@angular/core';
import {ConfirmationService, MenuItem} from "primeng/api";
import {Router} from "@angular/router";
import {CoursesService} from "../../services/courses/courses.service";
import {ICourse} from "../../shared/interfaces/course/course.interface";
import {FilterPipe} from "../../shared/pipes/filter/filter.pipe";
import {BehaviorSubject, debounceTime, filter, merge, Observable, of, Subject, switchMap, take, tap} from "rxjs";

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.less']
})
export class CoursesListComponent {
  items: MenuItem[] = [{label: 'Courses', routerLink: '/courses'}];
  home: MenuItem = {icon: 'pi pi-home'};
  private refresh$: BehaviorSubject<any> = new BehaviorSubject<any>(undefined);
  private search$: Subject<ICourse[]> = new Subject<ICourse[]>();
  public coursesList$: Observable<ICourse[]> = merge(
    this.refresh$.pipe(switchMap(() => this.coursesService.getList(this.limit, this.search))),
    this.search$
  );
  search: any;
  limit: number = 10;

  constructor(
    private filter: FilterPipe,
    private readonly coursesService: CoursesService,
    private confirmationService: ConfirmationService,
    private readonly router: Router
  ) {
  }

  public clearFilter(): void {
    this.search = "";
    this.limit = 10;
    this.doSearch();
  }

  public loadMore(): void {
    this.limit = this.limit + 10;
    this.doSearch();
  }

  onEditedCourse(course: ICourse): void {
    this.router.navigate(['courses/' + course.id]);
  }

  onDeletedCourse(course: ICourse): void {
    this.confirmationService.confirm({
      header: 'Удалить курс?',
      message: `Вы действительно хотите удалить этот курс ${course.title}?`,
      key: 'confirmDeleteAlert',
      accept: () => {
        this.coursesService.removeItem(course.id).pipe(
          take(1),
          tap(() => this.doSearch())
        ).subscribe();
      },
      reject: () => {
      },
    });

  }

  onSearch(): void {
    if (this.search === '') {
      this.doSearch();
      return;
    }
    of(this.search).pipe(
      debounceTime(250),
      filter((value) => !!value && value.length >= 3),
      switchMap((value) => this.coursesService.getList(this.limit, value.toLowerCase()).pipe(
        tap((courses) => this.search$.next(courses))
      ))
    ).subscribe()

  }

  doSearch(): void {
    this.refresh$.next(undefined);
  }

  addCourse(): void {
    this.router.navigate(['courses/new']);
  }
}
