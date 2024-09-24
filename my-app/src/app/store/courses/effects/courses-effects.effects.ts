import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import * as fromCoursesActions from '../actions/courses-actions.actions';
import {catchError, map, switchMap, tap, withLatestFrom} from "rxjs/operators";
import {of} from "rxjs";
import {selectCoursesCount} from '../selectors/courses-selectors.selectors';
import {CoursesService} from "../../../services/courses/courses.service";
import {Store} from "@ngrx/store";
import {State} from '../..';


@Injectable()
export class CoursesEffectsEffects {
  public coursesEffect$ = createEffect(() => this.actions$.pipe(
    ofType(fromCoursesActions.getCourses),
    withLatestFrom(this.store.select(selectCoursesCount)),
    switchMap(([{limit, name}, count]) => this.coursesService.getList(limit || count + 10, name).pipe(
      map((data) => fromCoursesActions.getCoursesSuccess({data})),
      catchError((error) => of(fromCoursesActions.getCoursesFailure({error})))
    ))
  ));

  public getCoursesSuccess$ = createEffect(() => this.actions$.pipe(
    ofType(fromCoursesActions.getCoursesSuccess),
    tap(() => console.log('Courses loaded'))
  ), {dispatch: false});

  public createCourse$ = createEffect(() => this.actions$.pipe(
    ofType(fromCoursesActions.createCourse),
    switchMap(({course}) => this.coursesService.createCourse(course).pipe(
      withLatestFrom(this.store.select(selectCoursesCount)),
      map(([_, limit]) => fromCoursesActions.getCourses({limit})),
      catchError((error) => of(fromCoursesActions.createCourseFailure({error})))
    ))
  ));

  public updateCourse$ = createEffect(() => this.actions$.pipe(
    ofType(fromCoursesActions.updateCourse),
    switchMap(({id, course}) => this.coursesService.updateItem(id, course).pipe(
      withLatestFrom(this.store.select(selectCoursesCount)),
      map(([_, limit]) => fromCoursesActions.getCourses({limit})),
      catchError((error) => of(fromCoursesActions.updateCourseFailure({error})))
    ))
  ));

  public removeCourse$ = createEffect(() => this.actions$.pipe(
    ofType(fromCoursesActions.removeCourse),
    switchMap(({id}) => this.coursesService.removeItem(id).pipe(
      withLatestFrom(this.store.select(selectCoursesCount)),
      map(([_, limit]) => fromCoursesActions.getCourses({limit})),
      catchError((error) => of(fromCoursesActions.removeCourseFailure({error})))
    ))
  ));

  constructor(private actions$: Actions, private readonly coursesService: CoursesService, private readonly store: Store<State>,) {
  }
}
