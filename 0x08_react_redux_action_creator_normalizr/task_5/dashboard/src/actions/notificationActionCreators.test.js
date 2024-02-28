import {markAsread, setNotificationFilter} from './notificationActionCreators';
import {MARK_AS_READ, SET_TYPE_FILTER, NotificationTypeFilters} from './notificationActionTypes';

test('markAsread action works as expected', () => {
    expect(markAsread(1)).toEqual({ type: MARK_AS_READ, index: 1 });
});

test('setNotificationFilter action works as expected', () => {
    expect(setNotificationFilter('DEFAULT')).toEqual({ type: SET_TYPE_FILTER, filter: "DEFAULT" });
    expect(setNotificationFilter('URGENT')).toEqual({ type: SET_TYPE_FILTER, filter: "URGENT" });
    expect(setNotificationFilter('HELLO')).toEqual({ type: SET_TYPE_FILTER, filter: "DEFAULT" });
});
