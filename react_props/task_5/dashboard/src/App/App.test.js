import React from 'react';
import { shallow } from "enzyme";
import App from "./App"

test('App renders without crashing', () => {
    shallow(<App />);
});

test('Verify that App renders a div with the class App-header', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('Notifications').length).toBe(1);
});

test('Verify that App renders a div with the class App-header', () => {
    const wrapper = shallow(<App>
        <div className="App"></div>
    </App>);
    expect(wrapper.find('Header').length).toBe(1);
});

test('Verify that App renders a div with the class App-header', () => {
    const wrapper = shallow(<App>
        <div className="App"></div>
    </App>);
    expect(wrapper.find('Login').length).toBe(1);
});

test('Verify that App renders a div with the class App-header', () => {
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
