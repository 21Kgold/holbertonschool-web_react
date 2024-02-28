import { selectCourse, unSelectCourse } from "./courseActionCreators";
import {SELECT_COURSE, UNSELECT_COURSE} from './courseActionTypes';

test('test for the selectCourse action', () => {
    expect(selectCourse(1)).toEqual({ type: SELECT_COURSE, index: 1 });
});

test('test for the unSelectCourse action', () => {
    expect(unSelectCourse(1)).toEqual({ type: UNSELECT_COURSE, index: 1 });
});
