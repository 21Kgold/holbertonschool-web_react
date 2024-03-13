import {SELECT_COURSE, UNSELECT_COURSE} from './courseActionTypes';

// action creators
export const selectCourse = (index) => {return {type: SELECT_COURSE, index}};
export const unSelectCourse = (index) => {return {type: UNSELECT_COURSE, index}};

// Manually binding action creators to dispatch
export const boundSelectCourse = (index) => dispatch(selectCourse(index));
export const boundUnSelectCourse = (index) => dispatch(unSelectCourse(index));
