import {MARK_AS_READ, SET_TYPE_FILTER, NotificationTypeFilters} from './notificationActionTypes'

export const markAsread = (index) => {
    return {
        type: MARK_AS_READ,
        index
      }
};

export const setNotificationFilter = (filter) => {
    if (filter === NotificationTypeFilters[1]) {
        return { type: SET_TYPE_FILTER, filter }
    } else {
        return { type: SET_TYPE_FILTER, filter: NotificationTypeFilters[0] }
    }   
};
