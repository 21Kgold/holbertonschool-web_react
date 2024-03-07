import {LOGIN, LOGOUT, LOGIN_SUCCESS, LOGIN_FAILURE, DISPLAY_NOTIFICATION_DRAWER, HIDE_NOTIFICATION_DRAWER} from '../actions/uiActionTypes';

const initialState = {
    isNotificationDrawerVisible: false,
    isUserLoggedIn: false,
    user: {}
};

const uiReducer = (state = initialState, action) => {
    switch(action.type) {
        case DISPLAY_NOTIFICATION_DRAWER:
            // update the state immutably by copying the existing state and updating the copy
            return {...state, isNotificationDrawerVisible: true};
        case HIDE_NOTIFICATION_DRAWER:
            return {...state, isNotificationDrawerVisible: false};
        case LOGIN_SUCCESS:
            return {...state, isUserLoggedIn: true};
        case LOGIN_FAILURE:
            return {...state, isUserLoggedIn: false};
        case LOGOUT:
            return {...state, isUserLoggedIn: false};
        default:
            // return the existing state object if nothing should change
            return state;
    }
}

export {initialState, uiReducer};