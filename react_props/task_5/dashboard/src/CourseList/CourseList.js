import React from 'react';
import CourseListRow from './CourseListRow';
import './CourseList.css';
import PropTypes from 'prop-types';
import CourseShape from './CourseShape';

function CourseList({listCourses}) {
    let courses;
    if (listCourses.length < 1) {
        courses = <tbody><tr>No course available yet</tr></tbody>
    } else {
        courses = <tbody>
            {listCourses.map((element) => {
                return (<CourseListRow key={element.id} textFirstCell={element.name} textSecondCell={element.credit} isHeader={false} />)
            })}
        </tbody>
    }

    return (
    <table id="CourseList">
        <thead>
            <CourseListRow textFirstCell="Available courses"  isHeader={true} />
            <CourseListRow textFirstCell="Course name" textSecondCell="Credit" isHeader={true} />
        </thead>
        {courses}
    </table>);
}

CourseList.propTypes = {
    listCourses: PropTypes.arrayOf(CourseShape),
};

CourseList.defaultProps = {
    listCourses: [],
}

export default CourseList;