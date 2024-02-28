import {LOGIN, LOGOUT, DISPLAY_NOTIFICATION_DRAWER, HIDE_NOTIFICATION_DRAWER} from './uiActionTypes';
import { login, logout, displayNotificationDrawer, hideNotificationDrawer } from './uiActionCreators';


test('function login works as expected', () => {
    expect(login('hello', 'world')).toEqual({type: LOGIN, user: {email: 'hello', password: 'world'}});
});

test('function logout works as expected', () => {
    expect(logout()).toEqual({type: LOGOUT});
});

test('function displayNotificationDrawer works as expected', () => {
    expect(displayNotificationDrawer()).toEqual({type: DISPLAY_NOTIFICATION_DRAWER});
});

test('function hideNotificationDrawer works as expected', () => {
    expect(hideNotificationDrawer()).toEqual({type: HIDE_NOTIFICATION_DRAWER});
});
