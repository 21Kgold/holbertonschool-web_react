import React from 'react';
import {shallow} from 'enzyme';
import CourseList from './CourseList';

test('Renders CourseList component without crashing', () => {
    shallow(<CourseList />);
});

test('Renders the 5 different rows', () => {
    const wrapper = shallow(<CourseList><table></table></CourseList>);
    expect(wrapper.find('CourseListRow').length).toBe(5);
});
