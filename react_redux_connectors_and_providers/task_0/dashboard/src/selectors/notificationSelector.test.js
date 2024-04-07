import { Map, fromJS } from "immutable";
import { filterTypeSelected, getNotifications, getUnreadNotifications } from "./notificationSelector";
import {notificationReducer, defaultNotificationState } from "../reducers/notificationReducer";
import {notificationsNormalizer} from "../schema/notifications";
import { MARK_AS_READ, SET_TYPE_FILTER } from "../actions/notificationActionTypes"


test('with empty action, filterTypeSelected returns filter default value', () => {
  const initialState = undefined;
  const action = {};
  const state = notificationReducer(initialState, action);
  expect(filterTypeSelected(state)).toEqual(defaultNotificationState.filter);
});

test('filterTypeSelected returns filter value, after update with SET_TYPE_FILTER action', () => {
  const initialState = {
    "filter": "DEFAULT", 
    "notifications": {
      "1": {"id": 1, "isRead": false, "type": "default", "value": "New course available"}, 
      "2": {"id": 2, "isRead": true, "type": "urgent", "value": "New resume available"}, 
      "3": {"id": 3, "isRead": false, "type": "urgent", "value": "New data available"}
    }
  };

  const action = {
      type: SET_TYPE_FILTER,
      filter: "URGENT"
  };
  const state = notificationReducer(fromJS(initialState), action);
  expect(filterTypeSelected(fromJS(state))).toEqual(action.filter);
});

test('with empty action, getNotifications returns notifications default value', () => {
  const initialState = undefined;
  const action = {};
  const state = notificationReducer(initialState, action);
  expect(getNotifications(state)).toEqual((defaultNotificationState.notifications));
});

test('getNotifications returns notifications, after update with SET_TYPE_FILTER action', () => {
  const initialState = {
    "filter": "DEFAULT", 
    "notifications": {
      "1": {"id": 1, "isRead": false, "type": "default", "value": "New course available"}, 
      "2": {"id": 2, "isRead": true, "type": "urgent", "value": "New resume available"}, 
      "3": {"id": 3, "isRead": false, "type": "urgent", "value": "New data available"}
    }
  };

  initialState.notifications = Map(initialState.notifications);

  const action = {
      type: SET_TYPE_FILTER,
      filter: "URGENT"
  };
  const state = notificationReducer(fromJS(initialState), action);
  expect(getNotifications(fromJS(state))).toEqual(Map(initialState.notifications));
});

test('getUnreadNotifications returns notifications, after update with SET_TYPE_FILTER action', () => {
  const initialState = {
    "filter": "DEFAULT", 
    "notifications": {
      "1": {"id": 1, "isRead": false, "type": "default", "value": "New course available"}, 
      "2": {"id": 2, "isRead": true, "type": "urgent", "value": "New resume available"}, 
      "3": {"id": 3, "isRead": false, "type": "urgent", "value": "New data available"}
    }
  };

  initialState.notifications = notificationsNormalizer(
    initialState.notifications
  ).notifications;

  const action = {
    type: MARK_AS_READ,
    index: 3
  };

  const expected = {
    "2": {"id": 2, "isRead": true, "type": "urgent", "value": "New resume available"}, 
    "3": {"id": 3, "isRead": true, "type": "urgent", "value": "New data available"}
  };

  const state = notificationReducer(fromJS(initialState), action);
  expect(getUnreadNotifications(state).toJS()).toEqual(expected);
});
