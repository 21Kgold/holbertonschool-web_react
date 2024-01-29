import React from 'react';
import Notifications from '../Notifications/Notifications';
import Login from '../Login/Login';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import CourseList from '../CourseList/CourseList';
import './App.css';
import PropTypes from 'prop-types';

function App({isLoggedIn}) {
  let displayScreen;
  if (isLoggedIn === false) {
    displayScreen = <Login/>
  } else {
    displayScreen = <CourseList/>
  }
  return (
    <>
    <Notifications />
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
