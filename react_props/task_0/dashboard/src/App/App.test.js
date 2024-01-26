import React from 'react';
import { shallow } from "enzyme";
import App from "./App"

test('App renders without crashing', () => {
    shallow(<App />);
});

test('Verify that App renders a div with the class App-header', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('div.App-header').length).toBe(1);
});

test('Verify that App renders a div with the class App-body', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('div.App-body').length).toBe(1);
});

test('Verify that App renders a div with the class App-footer', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('div.App-footer').length).toBe(1);
});
