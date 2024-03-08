import React from 'react';
import {shallow, mount} from 'enzyme';
import Footer from './Footer';
import AppContext from '../App/AppContext';

test('Footer renders without crashing', () => {
    shallow(<Footer />);
});

test('Verify that the Footer component at the very least render the text “Copyright”', () => {
    const wrapper = mount(<Footer />);
    expect(wrapper.text().includes('Copyright')).toBe(true);
});

test('Verify that the link (Contact us) is not displayed when the user is logged out within the context', () => {
    const contextValue = { user: { email: '', password: '', isLoggedIn: false } };
    const wrapper = mount(
        <AppContext.Provider value={contextValue}>
            <Footer />
        </AppContext.Provider> );

    expect(wrapper.find('a').length).toBe(0);
});

test('Verify that the link (Contact us) is displayed when the user is logged in within the context', () => {
    const contextValue = { user: { email: 'hello@true', password: 'codeword', isLoggedIn: true } };
    const wrapper = mount(
        <AppContext.Provider value={contextValue}>
            <Footer />
        </AppContext.Provider> );

    expect(wrapper.find('a').length).toBe(1);
});
