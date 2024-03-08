import { uiReducer, initialState } from "./uiReducer";

test('Verify uiReducer returns the initial state when no action is passed', () => {
    const nextState = uiReducer(undefined, {});
    // toJS() converts the Immutable state returned by the reducer into a plain JavaScript object
    expect(nextState.toJS()).toEqual(initialState);
});

test('Verify uiReducer returns the initial state when SELECT_COURSE action is passed', () => {
    const nextState = uiReducer(undefined, {type: 'SELECT_COURSE'});
    expect(nextState.toJS()).toEqual(initialState);
});

test('Verify uiReducer returns the updated state when DISPLAY_NOTIFICATION_DRAWER action is passed', () => {
    const nextState = uiReducer(undefined, {type: 'DISPLAY_NOTIFICATION_DRAWER'});
    expect(nextState.toJS()).toEqual({...initialState, isNotificationDrawerVisible: true});
});
