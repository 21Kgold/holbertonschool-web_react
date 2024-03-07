import { uiReducer, initialState } from "./uiReducer";

test('Verify uiReducer returns the initial state when no action is passed', () => {
    expect(uiReducer(undefined, {})).toEqual(initialState);
});

test('Verify uiReducer returns the initial state when SELECT_COURSE action is passed', () => {
    expect(uiReducer(undefined, {type: 'SELECT_COURSE'})).toEqual(initialState);
});

test('Verify uiReducer returns the updated state when DISPLAY_NOTIFICATION_DRAWER action is passed', () => {
    expect(uiReducer(undefined, {type: 'DISPLAY_NOTIFICATION_DRAWER'})).toEqual({...initialState, isNotificationDrawerVisible: true});
});
