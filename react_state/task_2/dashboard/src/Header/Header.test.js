import React from 'react';
import {shallow, mount} from 'enzyme';
import Header from './Header';
import {StyleSheetTestUtils} from 'aphrodite';
import AppContext from '../App/AppContext';

beforeAll(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });

test('Header component renders whitout crashing', () => {
    mount(<Header />);
});

test('Verify that the Header component render (1) img and (1) h1 tags', () => {
    const wrapper = mount(<Header />);
    expect(wrapper.find('img').length).toBe(1);
    expect(wrapper.find('h1').length).toBe(1);
});

test('Verify that the logoutSection is not created with a default context value', () => {
    const wrapper = mount(<Header />);
    expect(wrapper.find('#logoutSection').length).toBe(0);
});

test('Verify that the logoutSection is created with a user context value', () => {
    const contextValue = { user: { email: 'hello@true', isLoggedIn: true } };
    const wrapper = mount(
        <AppContext.Provider value={contextValue}>
            <Header />
        </AppContext.Provider> );

    expect(wrapper.find('#logoutSection').length).toBe(1);
});

test('Verify that clicking on the link is calling the spy with a user context value', () => {
    const spy = jest.fn();
    const contextValue = { user: { email: 'hello@true', isLoggedIn: true }, logOut: spy };
    const wrapper = mount(
        <AppContext.Provider value={contextValue}>
            <Header />
        </AppContext.Provider> );

    expect(wrapper.find('a').length).toBe(1);
    wrapper.find('a').simulate('click');
    expect(spy).toHaveBeenCalled();
});
