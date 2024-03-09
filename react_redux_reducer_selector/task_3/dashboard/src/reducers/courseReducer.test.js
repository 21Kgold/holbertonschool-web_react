import { courseReducer } from "./courseReducer";
import { FETCH_COURSE_SUCCESS, SELECT_COURSE, UNSELECT_COURSE } from "../actions/courseActionTypes";

test('default state returns an empty array', () => {
  const initialState = undefined;
  const action = {};
  // default state is set to an empty array
  const updatedState = [];

  expect(courseReducer(initialState, action)).toEqual(updatedState);
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

  const updatedState = [
    {id: 1, name: "ES6", isSelected: false, credit: 60},
    {id: 2, name: "Webpack", isSelected: false, credit: 20},
    {id: 3, name: "React", isSelected: false, credit: 40}
  ]

  expect(courseReducer(initialState, action)).toEqual(updatedState);
});

test('SELECT_COURSE returns the data with the right item updated', () => {
  const initialState = [
    {id: 1, name: "ES6", isSelected: false, credit: 60},
    {id: 2, name: "Webpack", isSelected: false, credit: 20},
    {id: 3, name: "React", isSelected: false, credit: 40}
  ]

  const action = {
    type: SELECT_COURSE,
    index: 2
  }

  const updatedState = [
    {id: 1, name: "ES6", isSelected: false, credit: 60},
    {id: 2, name: "Webpack", isSelected: true, credit: 20},
    {id: 3, name: "React", isSelected: false, credit: 40}
  ]

    expect(courseReducer(initialState, action)).toEqual(updatedState);
});

test('UNSELECT_COURSE returns the data with the right item updated', () => {
  const initialState = [
    {id: 1, name: "ES6", isSelected: false, credit: 60},
    {id: 2, name: "Webpack", isSelected: true, credit: 20},
    {id: 3, name: "React", isSelected: false, credit: 40}
  ]

  const action = {
    type: UNSELECT_COURSE,
    index: 2
  }

  const updatedState = [
    {id: 1, name: "ES6", isSelected: false, credit: 60},
    {id: 2, name: "Webpack", isSelected: false, credit: 20},
    {id: 3, name: "React", isSelected: false, credit: 40}
  ]

  expect(courseReducer(initialState, action)).toEqual(updatedState);
});
