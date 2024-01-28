import React from 'react';
import { shallow } from "enzyme";
import Notifications from './Notifications';
import NotificationItem from './NotificationItem';

test('App renders without crashing', () => {
    shallow(<Notifications />);
});

test('Verify that App renders 3 NotificationItem', () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.find('NotificationItem').length).toBe(3);
});

test('Verify that App renders a <p> element with the right text', () => {
    const wrapper = shallow(
        <Notifications>
            <div div className="Notifications">
            </div>
        </Notifications>
    );
    expect(wrapper.contains(<p>Here is the list of notifications</p>)).toBe(true);
});

test('Verify that App renders a div with the class App-header', () => {
    const wrapper = shallow(<Notifications />);
    const firstItem = wrapper.find(NotificationItem).first().dive();
    expect(firstItem.text()).toEqual("New course available");
});
