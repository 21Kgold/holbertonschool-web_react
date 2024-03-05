import {LOGIN, LOGOUT, LOGIN_SUCCESS, LOGIN_FAILURE, DISPLAY_NOTIFICATION_DRAWER, HIDE_NOTIFICATION_DRAWER} from './uiActionTypes';
import { login, logout, loginSuccess, loginFailure, displayNotificationDrawer, hideNotificationDrawer, boundLogin, loginRequest } from './uiActionCreators';
import configureStore from 'redux-mock-store'; // creates a mock Redux store
import { default as ReduxThunk } from 'redux-thunk'; // allow to write action creators that return a function instead of an action
import fetchMock from 'fetch-mock'; // mock the fetch API
const middlewares = [ReduxThunk];
const mockStore = configureStore(middlewares);

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

// Setting up the mock store


test('verify that if the API returns the right response, the store received two actions LOGIN and LOGING_SUCCESS', () => {
    const store = mockStore({});

    // Mock the API call
    const user = {email: 'hello@world.com', password: 'HelloWorld' };
    fetchMock.getOnce('../../dist/login-success.json', {
        body: [{user}],
        headers: {'content-type': 'application/json'}
    });

    const expectedActions = [loginSuccess];

    return store.dispatch(loginRequest(user.email, user.password).then(() => {
        expect(store.getActions()).toEqual(expectedActions);
    }));
});
