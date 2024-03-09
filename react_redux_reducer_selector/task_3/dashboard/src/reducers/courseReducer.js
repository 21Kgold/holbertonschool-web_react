import {SELECT_COURSE, UNSELECT_COURSE, FETCH_COURSE_SUCCESS} from '../actions/courseActionTypes';


export const courseReducer = (state = [], action) => {
    switch(action.type) {
        case FETCH_COURSE_SUCCESS:
            return action.data.map((element) => {
                return {
                    ...element,
                    isSelected: false
                }
            });
        case SELECT_COURSE:
            return state.map((element) => {
                if (element.id === action.index) {
                    return {
                        ...element,
                        isSelected: true
                    }
                }
                return element;
            });
        case UNSELECT_COURSE:
            return state.map((element) => {
                if (element.id === action.index) {
                    return {
                        ...element,
                        isSelected: false
                    }
                }
                return element;
            });
        default:
            return state;
    }
}
