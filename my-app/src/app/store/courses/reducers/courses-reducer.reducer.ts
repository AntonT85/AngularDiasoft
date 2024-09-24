import {createReducer, on} from '@ngrx/store';
import {ICourse} from "../../../shared/interfaces/course/course.interface";
import * as fromCoursesActions from '../actions/courses-actions.actions';

export const coursesReducerFeatureKey = 'courses';

export interface State {
  isLoading: boolean,
  courses: ICourse[],
  courseId: number | null;
}

export const initialState: State = {
  isLoading: false,
  courses: [],
  courseId: null
};

export const reducer = createReducer(
  initialState,
  on(fromCoursesActions.getCourses, (state) => ({...state, isLoading: true})),
  on(fromCoursesActions.getCoursesSuccess, (state, {data}) => ({...state, courses: [...data], isLoading: false})),
  on(fromCoursesActions.getCoursesFailure, (state) => ({...state, isLoading: false}))
);
