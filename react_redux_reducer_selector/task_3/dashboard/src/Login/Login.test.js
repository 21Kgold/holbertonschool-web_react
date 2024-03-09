import React from 'react';
import {shallow} from 'enzyme';
import Login from './Login';
import {StyleSheetTestUtils} from 'aphrodite';

beforeAll(() => {
    StyleSheetTestUtils.suppressStyleInjection();
});

test('Login renders without crashing', () => {
    shallow(<Login />);
});

test('Verify that the Login component renders 2 input tags and 2 label tags', () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.find('label').length).toBe(2);
    expect(wrapper.find('input[type="email"]').length).toBe(1);
    expect(wrapper.find('input[type="password"]').length).toBe(1);
});

test('Verify that the submit button is disabled by default', () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.find('input[type="submit"]').prop('disabled')).toBe(true); 
});

test('Verify that after changing the value of the two inputs, the button is enabled', () => {
    const wrapper = shallow(<Login />);
    const event1 = {target: {value: ''}}; // mock event object
    expect(wrapper.find('input[type="email"]').simulate('change', event1));
    expect(wrapper.find('input[type="password"]').simulate('change', event1));
    expect(wrapper.find('input[type="submit"]').prop('disabled')).toBe(true);
    
    const event2 = {target: {value: 'something'}};
    expect(wrapper.find('input[type="email"]').simulate('change', event2));
    expect(wrapper.find('input[type="password"]').simulate('change', event2));
    expect(wrapper.find('input[type="submit"]').prop('disabled')).toBe(false);
});
