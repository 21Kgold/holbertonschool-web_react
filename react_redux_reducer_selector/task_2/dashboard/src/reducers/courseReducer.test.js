import { courseReducer } from "./courseReducer";
import { FETCH_COURSE_SUCCESS, SELECT_COURSE, UNSELECT_COURSE } from "../actions/courseActionTypes";

test('default state returns an empty array', () => {
    expect(courseReducer(undefined, {})).toEqual([]);
});

test('FETCH_COURSE_SUCCESS returns the data passed', () => {
    const action = {
        type: FETCH_COURSE_SUCCESS,
        data: [
          {
            id: 1,
            name: "ES6",
            credit: 60
          },
          {
            id: 2,
            name: "Webpack",
            credit: 20
          },
          {
            id: 3,
            name: "React",
            credit: 40
          }
        ]
      }

    const newData = [
        {
          id: 1,
          name: "ES6",
          isSelected: false,
          credit: 60
        },
        {
          id: 2,
          name: "Webpack",
          isSelected: false,
          credit: 20
        },
        {
          id: 3,
          name: "React",
          isSelected: false,
          credit: 40
        }
      ]
    expect(courseReducer(undefined, action)).toEqual(newData);
});

test('SELECT_COURSE returns the data with the right item updated', () => {
    const data1 = [
        {
            id: 1,
            name: "ES6",
            isSelected: false,
            credit: 60
        },
        {
            id: 2,
            name: "Webpack",
            isSelected: false,
            credit: 20
        },
        {
            id: 3,
            name: "React",
            isSelected: false,
            credit: 40
        }
    ]

    const action1 = {
        type: SELECT_COURSE,
        index: 2
    }

    const newData1 = [
        {
          id: 1,
          name: "ES6",
          isSelected: false,
          credit: 60
        },
        {
          id: 2,
          name: "Webpack",
          isSelected: true,
          credit: 20
        },
        {
          id: 3,
          name: "React",
          isSelected: false,
          credit: 40
        }
    ]

    expect(courseReducer(data1, action1)).toEqual(newData1);
});

test('SELECT_COURSE returns the data with the right item updated', () => {
    const data1 = [
        {
            id: 1,
            name: "ES6",
            isSelected: false,
            credit: 60
        },
        {
            id: 2,
            name: "Webpack",
            isSelected: false,
            credit: 20
        },
        {
            id: 3,
            name: "React",
            isSelected: false,
            credit: 40
        }
    ]

    const action2 = {
        type: UNSELECT_COURSE,
        index: 2
    }

    const newData1 = [
        {
          id: 1,
          name: "ES6",
          isSelected: false,
          credit: 60
        },
        {
          id: 2,
          name: "Webpack",
          isSelected: true,
          credit: 20
        },
        {
          id: 3,
          name: "React",
          isSelected: false,
          credit: 40
        }
    ]

    expect(courseReducer(newData1, action2)).toEqual(data1);
});