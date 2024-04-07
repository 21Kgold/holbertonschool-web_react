import React from 'react';
import { shallow, mount } from "enzyme";
import App from "./App"
import {StyleSheetTestUtils} from 'aphrodite';
import {user, logOut} from './AppContext';

beforeAll(() => {
    StyleSheetTestUtils.suppressStyleInjection();
});


// shallow function only renders the parent component
test('App renders without crashing', () => {
    shallow(<App />);
});

test('Verify that App renders Notifications component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('Notifications').length).toBe(1);
});

test('Verify that App renders Header component', () => {
    const wrapper = shallow(<App>
        <div className="App"></div>
    </App>);
    expect(wrapper.find('Header').length).toBe(1);
});

// mount function, fully renders the component and all of its children
test('Verify that App renders Login component', () => {
    const wrapper = mount(<App>
        <div className="App"></div>
    </App>);
    expect(wrapper.find('Login').length).toBe(1);
});

test('Verify that App renders Footer component', () => {
    const wrapper = shallow(<App>
        <div className="App"></div>
    </App>);
    expect(wrapper.find('Footer').length).toBe(1);
});

test('CourseList is not displayed', () => {
    const wrapper = shallow(<App/>);
    expect(wrapper.find('CourseList').length).toBe(0);
});

test('CourseList is displayed if isLoggedIn: true', () => {
    const wrapper = mount(<App />);
    wrapper.instance().logIn('hello@true', 'codeword');

    // state updates may be asynchronous, so changes do not always immediately reflect in the component.
    //ensure the component re-renders before the assertions
    wrapper.update();

    expect(wrapper.state().value.user.isLoggedIn).toBe(true);
    expect(wrapper.find('Login').length).toBe(0);
    expect(wrapper.find('CourseList').length).toBe(1);
});

test('Logs the correct message when ctrl + h are pressed', () => {
    // Mock console.log
    console.log = jest.fn();
    const spy = jest.fn();
    const stateValue = { user: { email: 'hello@true', password: 'codeword', isLoggedIn: true }, logOut: spy };
    const wrapper = mount(<App />);
    const instance = wrapper.instance();
    instance.setState(stateValue);
    expect(wrapper.state().user).toEqual(stateValue.user);
    expect(wrapper.state().user.isLoggedIn).toBe(true);
    
    // Simulate a keydown event
    const event = new KeyboardEvent('keydown', { key: 'h', ctrlKey: true });
    instance.handleKeyDown(event);

    // Check that console.log was called with the correct message
    expect(console.log).toHaveBeenCalledWith('Logging you out');

    // Check that the prop was passed successfully
    // expect(instance.props.logOutMock).toBe(logOut());

});

test('displayDrawer default state is false and after calling handleDisplayDrawer displayDrawer state changes to true', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.state().displayDrawer).toBe(false);
    wrapper.instance().handleDisplayDrawer();
    expect(wrapper.state().displayDrawer).toBe(true);
});

test('After calling handleHideDrawer displayDrawer state changes to false', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.state().displayDrawer).toBe(false);
    wrapper.instance().handleDisplayDrawer();
    expect(wrapper.state().displayDrawer).toBe(true);
    wrapper.instance().handleHideDrawer();
    expect(wrapper.state().displayDrawer).toBe(false);
});

test('verify that the logIn function updates the state correctly', () => {
    const wrapper = mount(<App />);
    wrapper.instance().logIn('hello@true', 'codeword');

    // state updates may be asynchronous, so changes do not always immediately reflect in the component.
    //ensure the component re-renders before the assertions
    wrapper.update();

    expect(wrapper.state().value.user.isLoggedIn).toBe(true);
    expect(wrapper.state().value.user.email).toBe('hello@true');
    expect(wrapper.state().value.user.password).toBe('codeword');
});

test('verify that the logOut function updates the state correctly', () => {
    const stateValue = {value: { user: { email: 'hello@true', password: 'codeword', isLoggedIn: true }, logOut: logOut }};
    const wrapper = mount(<App />);
    wrapper.instance().setState(stateValue);

    // state updates may be asynchronous, so changes do not always immediately reflect in the component.
    //ensure the component re-renders before the assertions
    wrapper.update();

    expect(wrapper.state().user).toEqual(stateValue.user);
    expect(wrapper.state().value.user.isLoggedIn).toBe(true);
    expect(wrapper.state().value.user.email).toBe('hello@true');
    expect(wrapper.state().value.user.password).toBe('codeword');

    wrapper.instance().logOut();
    expect(wrapper.state().value.user.isLoggedIn).toBe(false);
    expect(wrapper.state().value.user.email).toBe('');
    expect(wrapper.state().value.user.password).toBe('');
});


test('verify that markNotificationAsRead works as intended', () => {
    const stateValue = {value: { user: { email: 'hello@true', password: 'codeword', isLoggedIn: true }, logOut: logOut,}, 
    listNotifications: [
        {id: 100, type: "urgent", value: "test1"},
        {id: 200, type: "urgent", value: "test2"},
        {id: 300, type: "urgent", value: "test3"},
        {id: 400, type: "default", value: "test4"}]};
    const wrapper = mount(<App />);
    wrapper.instance().setState(stateValue);

    // state updates may be asynchronous, so changes do not always immediately reflect in the component.
    //ensure the component re-renders before the assertions
    wrapper.update();

    expect(wrapper.state().listNotifications[0].id).toBe(100);
    expect(wrapper.state().listNotifications.length).toBe(4);

    wrapper.instance().markNotificationAsRead(100);
    wrapper.instance().markNotificationAsRead(200);
    wrapper.instance().markNotificationAsRead(300);
    expect(wrapper.state().listNotifications.length).toBe(1);
    expect(wrapper.state().listNotifications).toEqual([{id: 400, type: "default", value: "test4"}]);
});
