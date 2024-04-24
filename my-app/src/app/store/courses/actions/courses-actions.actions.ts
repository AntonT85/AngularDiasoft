import { createAction, props } from '@ngrx/store';
import {ICourse} from "../../../shared/interfaces/course/course.interface";

export const getCourses = createAction(
  '[Courses] Get Courses',
  props<{ limit?: number, name?: string }>()
);

export const getCoursesSuccess = createAction(
  '[Courses] Get Courses Success',
  props<{ data: ICourse[] }>()
);

export const getCoursesFailure = createAction(
  '[Courses] Get Courses Failure',
  props<{ error: any }>()
);

export const createCourse = createAction(
  '[Courses] Create Course',
  props<{ course: ICourse }>()
);

export const createCourseFailure = createAction(
  '[Courses] Create Course Failure',
  props<{ error: any }>()
);

export const updateCourse = createAction(
  '[Courses] Update Course',
  props<{id: number, course: ICourse }>()
);

export const updateCourseFailure = createAction(
  '[Courses] Update Course Failure',
  props<{ error: any }>()
);

export const removeCourse = createAction(
  '[Courses] Remove Course',
  props<{id: string }>()
);

export const removeCourseFailure = createAction(
  '[Courses] Remove Course Failure',
  props<{ error: any }>()
);
