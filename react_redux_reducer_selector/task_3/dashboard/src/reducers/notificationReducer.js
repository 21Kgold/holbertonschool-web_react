import { MARK_AS_READ, SET_TYPE_FILTER, FETCH_NOTIFICATIONS_SUCCESS, NotificationTypeFilters } from "../actions/notificationActionTypes"


export const defaultState = {
    notifications: [],
    filter: 'DEFAULT'
}

export const notificationReducer = (state = defaultState, action) => {
    switch(action.type) {
        case FETCH_NOTIFICATIONS_SUCCESS:
            return {
                ...state,
                notifications: action.data.map((element) => {
                    return {
                        ...element,
                        isRead: false
                    }
                })
            }
        
        case MARK_AS_READ:
            return {
                ...state,
                notifications: state.notifications.map((element) => {
                    if (element.id === action.index) {
                        return {
                            ...element,
                            isRead: true
                        }
                    }
                    return element;
                })
            }

        case SET_TYPE_FILTER:
            return {
                ...state,
                filter: action.filter
            }

        default:
            return state;
    }
}
