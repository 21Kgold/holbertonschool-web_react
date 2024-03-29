import React from 'react';
import Notifications from '../Notifications/Notifications';
import Login from '../Login/Login';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import CourseList from '../CourseList/CourseList';
import './App.css';
import PropTypes from 'prop-types';
import { getLatestNotification } from '../utils/utils';

function App({isLoggedIn}) {
  const listNotifications = [
    {id: 1, type: 'default', value: 'New course available'},
    {id: 2, type: 'urgent', value: 'New resume available'},
    {id: 3, type: 'urgent', html: {__html: getLatestNotification()}},
  ];

  const listCourses = [
    {id: 1, name: 'ES6', credit: 60},
    {id: 2, name: 'Webpack', credit: 20},
    {id: 3, name: 'React', credit: 40}
  ];

  let displayScreen;
  if (isLoggedIn === false) {
    displayScreen = <Login/>
  } else {
    displayScreen = <CourseList listCourses={listCourses}/>
  }
  return (
    <>
    <Notifications listNotifications={listNotifications}  />
    <div className="App">
      <Header/>
      <hr></hr>
      {displayScreen}
      <hr></hr>
      <Footer/>
    </div>
    </>
  );
}

App.propTypes = {
  isLoggedIn: PropTypes.bool
}

App.defaultProps = {
  isLoggedIn: false
}

export default App;
