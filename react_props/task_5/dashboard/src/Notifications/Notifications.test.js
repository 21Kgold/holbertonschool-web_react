import React from 'react';
import { shallow } from "enzyme";
import Notifications from './Notifications';
import NotificationItem from './NotificationItem';

test('App renders without crashing', () => {
    shallow(<Notifications />);
});

test('Verify that App renders 3 NotificationItem', () => {
    const wrapper = shallow(<Notifications 
        displayDrawer={true} 
        listNotifications={[
            {id: 4, type: "urgent", value: "test1"},
            {id: 5, type: "urgent", value: "test2"},
            {id: 6, type: "urgent", value: "test3"},
            {id: 7, type: "default", value: "test4"},
        ]}/>);
    expect(wrapper.find('NotificationItem').length).toBe(4);
});

test('Verify that App renders a <tr> element with the right text', () => {
    const wrapper = shallow(
        <Notifications displayDrawer={true} listNotifications={[]} />
    );
    expect(wrapper.text().includes('Here is the list of notifications')).toBe(false);
    expect(wrapper.contains(<tr>No new notification for now</tr>)).toBe(true);
});

test('Verify that App renders a div with the class App-header', () => {
    const wrapper = shallow(<Notifications 
        displayDrawer={true} 
        listNotifications={[
            {id: 4, type: "urgent", value: "test1"},
            {id: 5, type: "urgent", value: "test2"},
            {id: 6, type: "urgent", value: "test3"},
            {id: 7, type: "default", value: "test4"},
        ]}/>);
    const firstItem = wrapper.find(NotificationItem).first().dive();
    expect(firstItem.find('li').text()).toBe("test1");
});

test('Menu item is being displayed when displayDrawer is false', () => {
    const wrapper = shallow(<Notifications displayDrawer={false} />);
    expect(wrapper.find('div.menuItem').length).toBe(1);
});

test('div.Notifications is not being displayed when displayDrawer is false', () => {
    const wrapper = shallow(<Notifications displayDrawer={false} />);
    expect(wrapper.find('div.Notifications').length).toBe(0);
});

test('Menu item is being displayed when displayDrawer is true', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} />);
    expect(wrapper.find('div.menuItem').length).toBe(1);
});

test('div.Notifications is being displayed when displayDrawer is true', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} />);
    expect(wrapper.find('div.Notifications').length).toBe(1);
});

test('Notifications renders correctly with a empty array or if no array is added', () => {
    shallow(<Notifications displayDrawer={true} />);
    shallow(<Notifications displayDrawer={true} listNotifications={[]} />);
});


