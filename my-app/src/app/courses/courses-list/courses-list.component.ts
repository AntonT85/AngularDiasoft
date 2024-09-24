import {Component, OnInit} from '@angular/core';
import {ConfirmationService, MenuItem} from "primeng/api";
import {Router} from "@angular/router";
import {ICourse} from "../../shared/interfaces/course/course.interface";
import {FilterPipe} from "../../shared/pipes/filter/filter.pipe";
import {debounceTime, filter, Observable, of, tap} from "rxjs";
import {State} from "../../store";
import {Store} from "@ngrx/store";
import {selectCourses} from "../../store/courses/selectors/courses-selectors.selectors";
import {getCourses, removeCourse} from "../../store/courses/actions/courses-actions.actions";

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.less']
})
export class CoursesListComponent implements OnInit {
  items: MenuItem[] = [{label: 'Courses', routerLink: '/courses'}];
  home: MenuItem = {icon: 'pi pi-home'};
  public coursesList$: Observable<ICourse[]> = this.store.select(selectCourses);
  search: any;
  limit: number = 10;

  constructor(
    private filter: FilterPipe,
    private confirmationService: ConfirmationService,
    private readonly router: Router,
    private readonly store: Store<State>
  ) {
  }

  ngOnInit(): void {
    this.doSearch();
  }

  public clearFilter(): void {
    this.search = "";
    this.limit = 10;
    this.doSearch();
  }

  public loadMore(): void {
    this.store.dispatch(getCourses({}))
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
        this.store.dispatch(removeCourse({id: course.id}));
      },
      reject: () => {
      },
    });

  }

  onSearch(text: string): void {
    this.search = text;
    if (this.search === '') {
      this.doSearch();
      return;
    }
    of(this.search).pipe(
      debounceTime(250),
      filter((value) => !!value && value.length >= 3),
      tap((value) => this.store.dispatch(getCourses({name: value.toLowerCase()})))
    ).subscribe()

  }

  doSearch(): void {
    this.store.dispatch(getCourses({}))
  }

  addCourse(): void {
    this.router.navigate(['courses/new']);
  }
}
