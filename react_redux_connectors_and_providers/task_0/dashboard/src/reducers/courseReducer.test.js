import { courseReducer } from "./courseReducer";
import { FETCH_COURSE_SUCCESS, SELECT_COURSE, UNSELECT_COURSE } from "../actions/courseActionTypes";
import {Map, fromJS} from 'immutable';

test('default state returns an empty array', () => {
  const initialState = undefined;
  const action = {};
  // default state is set to an empty array
  const updatedState = [];

  expect(courseReducer(initialState, action)).toEqual(Map(updatedState));
});

test('FETCH_COURSE_SUCCESS returns the data passed as the updated state', () => {
  const initialState = undefined;
  const action = {
    type: FETCH_COURSE_SUCCESS,
    data: [
      {id: 1, name: "ES6", credit: 60},
      {id: 2, name: "Webpack", credit: 20},
      {id: 3, name: "React", credit: 40}
    ]
  }

  const updatedState = {
    "1": {"credit": 60, "id": 1, "isSelected": false, "name": "ES6"}, 
    "2": {"credit": 20, "id": 2, "isSelected": false, "name": "Webpack"}, 
    "3": {"credit": 40, "id": 3, "isSelected": false, "name": "React"}
  }

  expect(courseReducer(initialState, action)).toEqual(Map(updatedState));
});

test('SELECT_COURSE returns the data with the right item updated', () => {
  const initialState = {
    "1": {"credit": 60, "id": 1, "isSelected": false, "name": "ES6"}, 
    "2": {"credit": 20, "id": 2, "isSelected": false, "name": "Webpack"}, 
    "3": {"credit": 40, "id": 3, "isSelected": false, "name": "React"}
  }

  const action = {
    type: SELECT_COURSE,
    index: 2,
  };

  const updatedState = {
    "1": {"credit": 60, "id": 1, "isSelected": false, "name": "ES6"}, 
    "2": {"credit": 20, "id": 2, "isSelected": true, "name": "Webpack"}, 
    "3": {"credit": 40, "id": 3, "isSelected": false, "name": "React"}
  }

  expect(courseReducer(fromJS(initialState), action).toJS()).toEqual(updatedState);
});

test('UNSELECT_COURSE returns the data with the right item updated', () => {
  const initialState = {
    "1": {"credit": 60, "id": 1, "isSelected": false, "name": "ES6"}, 
    "2": {"credit": 20, "id": 2, "isSelected": true, "name": "Webpack"}, 
    "3": {"credit": 40, "id": 3, "isSelected": false, "name": "React"}
  }

  const action = {
    type: UNSELECT_COURSE,
    index: 2
  }

  const updatedState = {
    "1": {"credit": 60, "id": 1, "isSelected": false, "name": "ES6"}, 
    "2": {"credit": 20, "id": 2, "isSelected": false, "name": "Webpack"}, 
    "3": {"credit": 40, "id": 3, "isSelected": false, "name": "React"}
  }

  expect(courseReducer(fromJS(initialState), action).toJS()).toEqual(updatedState);
});
