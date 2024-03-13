import {SELECT_COURSE, UNSELECT_COURSE, FETCH_COURSE_SUCCESS} from '../actions/courseActionTypes';
import {Map} from 'immutable';
import { coursesNormalizer } from '../schema/courses';


export const defaultCourseState = [];
export const courseReducer = (state = Map(defaultCourseState), action) => {
    switch(action.type) {
        case FETCH_COURSE_SUCCESS:
            const normalizedCoursesData = coursesNormalizer(action.data);
            Object.values(normalizedCoursesData).map((element) => {
                element.isSelected = false;
            });
            return state.merge(normalizedCoursesData);
        
        case SELECT_COURSE:
            return state.setIn([String(action.index), 'isSelected'], true);

        case UNSELECT_COURSE:
            return state.setIn([String(action.index), 'isSelected'], false);

        default:
            return state;
    }
}
