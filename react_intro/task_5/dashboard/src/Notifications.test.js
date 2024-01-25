import React from 'react';
import { shallow } from "enzyme";
import Notifications from './Notifications';

test('App renders without crashing', () => {
    shallow(<Notifications />);
});

test('Verify that App renders a div with the class App-header', () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.find('li').length).toBe(3);
});

test('Verify that App renders a div with the class App-header', () => {
    const wrapper = shallow(
        <Notifications>
            <div div className="Notifications">
            </div>
        </Notifications>
    );
    expect(wrapper.contains(<p>Here is the list of notifications</p>)).toBe(true);
});