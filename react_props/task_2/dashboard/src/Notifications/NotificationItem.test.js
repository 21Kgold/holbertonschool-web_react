import React from 'react';
import NotificationItem from './NotificationItem';
import {shallow} from 'enzyme';

test('Verify that the basic rendering of the component works without crashing', () => {
    shallow(<NotificationItem />);
});

test('Verify that by passing dummy type, it renders the correct html', () => {
    const wrapper = shallow(<NotificationItem type="default" />);
    expect(wrapper.find('li').length).toBe(1);
    expect(wrapper.find('li').prop('data-notification-type')).toBe("default");
});

test('Verify that by passing dummy value, it renders the correct html', () => {
    const wrapper = shallow(<NotificationItem value='test1' />);
    expect(wrapper.find('li').length).toBe(1);
    expect(wrapper.find('li').text().includes('test1')).toBe(true);
});

test('Verify that by passing dummy value, it renders the correct html', () => {
    const wrapper = shallow(<NotificationItem html='<u>test2</u>'/>);
    expect(wrapper.find('li').length).toBe(1);
    expect(wrapper.find('li').prop('dangerouslySetInnerHTML')).toEqual({__html: '<u>test2</u>'});
});
