import { MARK_AS_READ, SET_TYPE_FILTER, FETCH_NOTIFICATIONS_SUCCESS, NotificationTypeFilters } from "../actions/notificationActionTypes"
import {notificationsNormalizer} from '../schema/notifications';
import {Map} from 'immutable';

export const defaultNotificationState = {
    notifications: [],
    filter: 'DEFAULT'
}

export const notificationReducer = (state = Map(defaultNotificationState), action) => {
    switch(action.type) {
        case FETCH_NOTIFICATIONS_SUCCESS:
            const normalizedNotificationsData = notificationsNormalizer(action.data);
            Object.values(normalizedNotificationsData.notifications).map((element) => {
                element.isRead = false;
            });
            return state.merge(normalizedNotificationsData);
        
        case MARK_AS_READ:
            return state.setIn(['notifications', String(action.index), 'isRead'], true);

        case SET_TYPE_FILTER:
            return state.set('filter', String(action.filter));

        default:
            return state;
    }
}
