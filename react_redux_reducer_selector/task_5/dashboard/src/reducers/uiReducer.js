import {LOGIN, LOGOUT, LOGIN_SUCCESS, LOGIN_FAILURE, DISPLAY_NOTIFICATION_DRAWER, HIDE_NOTIFICATION_DRAWER} from '../actions/uiActionTypes';
import {Map} from 'immutable';

const initialState = {
    isNotificationDrawerVisible: false,
    isUserLoggedIn: false,
    user: {}
};

const uiReducer = (state = Map(initialState), action) => {
    switch(action.type) {
        case DISPLAY_NOTIFICATION_DRAWER:
            return state.set('isNotificationDrawerVisible', true);
        case HIDE_NOTIFICATION_DRAWER:
            return state.set('isNotificationDrawerVisible', false);
        case LOGIN_SUCCESS:
            return state.set('isUserLoggedIn', true);
        case LOGIN_FAILURE:
            return state.set('isUserLoggedIn', false);
        case LOGOUT:
            return state.set('isUserLoggedIn', false);
        default:
            // return the existing state object if nothing should change
            return state;
    }
}

export {initialState, uiReducer};