const fetch = require('node-fetch');
import {LOGIN, LOGOUT, LOGIN_SUCCESS, LOGIN_FAILURE, DISPLAY_NOTIFICATION_DRAWER, HIDE_NOTIFICATION_DRAWER} from './uiActionTypes';


export const login = (email, password) => {return {type: LOGIN, user: {email, password}};}

export const logout = () => {return {type: LOGOUT};}

export const loginSuccess = () => {return {type: LOGIN_SUCCESS};}

export const loginFailure = () => {return {type: LOGIN_FAILURE}}

export const displayNotificationDrawer = () => {return {type: DISPLAY_NOTIFICATION_DRAWER};}

export const hideNotificationDrawer = () => {return {type: HIDE_NOTIFICATION_DRAWER};}

// Manually binding action creators to dispatch
export const boundLogin = (email, password) => dispatch(login(email, password));
export const boundLogout = () => dispatch(logout());
export const boundDisplayNotificationDrawer = () => dispatch(displayNotificationDrawer());
export const boundHideNotificationDrawer = () => dispatch(hideNotificationDrawer());

export const loginRequest = (email, password) => {
    return (dispatch) => {
        boundLogin(email, password);

        // Simulate API call
        fetch('../../dist/login-success.json')
            .then(response => response.json())
            .then(data => {
                const user = data.find(user => user.email === email);
                user ? dispatch(loginSuccess()) : dispatch(loginFailure());
            });
    }
}
