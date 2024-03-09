import { MARK_AS_READ, SET_TYPE_FILTER, FETCH_NOTIFICATIONS_SUCCESS, NotificationTypeFilters } from "../actions/notificationActionTypes"
import { notificationReducer, defaultState} from "./notificationReducer"

test ('default case returns the right state value', () => {
    const initialState = undefined;
    const action = {};
    // default state is set to a variable named defaultState
    const updatedState = defaultState;

  expect(notificationReducer(initialState, action)).toEqual(updatedState);
});

test ('FETCH_NOTIFICATIONS_SUCCESS returns the right updated state value', () => {
    const initialState = undefined;

    const action = {
        type: FETCH_NOTIFICATIONS_SUCCESS,
        data: [
          {id: 1, type: "default", value: "New course available"},
          {id: 2, type: "urgent", value: "New resume available"},
          {id: 3, type: "urgent", value: "New data available"}
        ]
    };

    const updatedState = {
        filter: "DEFAULT",
        notifications: [
          {id: 1, isRead: false, type: "default", value: "New course available"},
          {id: 2, isRead: false, type: "urgent", value: "New resume available"},
          {id: 3, isRead: false, type: "urgent", value: "New data available"}
        ]
    };

  expect(notificationReducer(initialState, action)).toEqual(updatedState);
});

test ('MARK_AS_READ returns the right updated state value', () => {
    const initialState = {
        filter: "DEFAULT",
        notifications: [
          {id: 1, isRead: false, type: "default", value: "New course available"},
          {id: 2, isRead: false, type: "urgent", value: "New resume available"},
          {id: 3, isRead: false, type: "urgent", value: "New data available"}
        ]
    };

    const action = {
        type: MARK_AS_READ,
        index: 2
    };

    const updatedState = {
        filter: "DEFAULT",
        notifications: [
          {id: 1, isRead: false, type: "default", value: "New course available"},
          {id: 2, isRead: true, type: "urgent", value: "New resume available"},
          {id: 3, isRead: false, type: "urgent", value: "New data available"}
        ]
    };

  expect(notificationReducer(initialState, action)).toEqual(updatedState);
});

test ('SET_TYPE_FILTER returns the right updated state value', () => {
    const initialState = {
        filter: "DEFAULT",
        notifications: [
          {id: 1, isRead: false, type: "default", value: "New course available"},
          {id: 2, isRead: false, type: "urgent", value: "New resume available"},
          {id: 3, isRead: false, type: "urgent", value: "New data available"}
        ]
    };

    const action = {
        type: SET_TYPE_FILTER,
        filter: "URGENT"
    };

    const updatedState = {
        filter: "URGENT",
        notifications: [
          {id: 1, isRead: false, type: "default", value: "New course available"},
          {id: 2, isRead: false, type: "urgent", value: "New resume available"},
          {id: 3, isRead: false, type: "urgent", value: "New data available"}
        ]
    };

  expect(notificationReducer(initialState, action)).toEqual(updatedState);
});