import React from 'react';
import { shallow, mount } from "enzyme";
import App from "./App"
import ReactDOM from 'react-dom';
import {StyleSheetTestUtils} from 'aphrodite';

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
    const wrapper = shallow(<App>
        <div className="App"></div>
    </App>);
    expect(wrapper.find('CourseList').length).toBe(0);
});

test('CourseList is not displayed', () => {
    const wrapper = shallow(<App isLoggedIn={true}>
        <div className="App"></div>
    </App>);
    expect(wrapper.find('Login').length).toBe(0);
    expect(wrapper.find('CourseList').length).toBe(1);
});

test('Logs the correct message when ctrl + h are pressed', () => {
    const wrapper = shallow(<App logOut={logOutMock} />);
    const instance = wrapper.instance();

    // Mock console.log
    console.log = jest.fn();
    const logOutMock = jest.fn();

    // Simulate a keydown event
    const event = new KeyboardEvent('keydown', { key: 'h', ctrlKey: true });
    instance.handleKeyDown(event);

    // Check that console.log was called with the correct message
    expect(console.log).toHaveBeenCalledWith('Logging you out');

    // Check that the prop was passed successfully
    // expect(instance.props.logOutMock).toBe(logOut());

});
