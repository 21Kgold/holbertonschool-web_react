import React, {Component} from 'react';
import Notifications from '../Notifications/Notifications';
import Login from '../Login/Login';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import CourseList from '../CourseList/CourseList';
import './App.css';
import PropTypes from 'prop-types';
import { getLatestNotification } from '../utils/utils';
import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom';
import BodySection from '../BodySection/BodySection';
import WithLogging from '../HOC/WithLogging';


class App extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = (event) => {
    if (event.ctrlKey && event.key === 'h') { // ctrl + h/H is pressed
      console.log(`Logging you out`);
      this.props.logOut();
    }
  }

  render() {
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

    let LoginHOC = WithLogging(Login);
    let displayScreen;
    if (this.props.isLoggedIn === false) {
      displayScreen = <BodySectionWithMarginBottom title={'Log in to continue'}> <LoginHOC/> </BodySectionWithMarginBottom>
    } else {
      displayScreen = 
      <BodySectionWithMarginBottom title={'Course list'}>
        <CourseList listCourses={listCourses}/>
      </BodySectionWithMarginBottom>
    }
    return (
      <>
        <Notifications listNotifications={listNotifications} />
        <div className="App">
          <Header/>
          <hr></hr>
          {displayScreen}
          <BodySection  title='News from the School' children={<p>Some random text</p>}></BodySection>
          <hr></hr>
          <Footer/>
        </div>
      </>
    );
  }
}

App.propTypes = {
  isLoggedIn: PropTypes.bool,
  logOut: PropTypes.func
}

App.defaultProps = {
  isLoggedIn: false,
  logOut: () => {}
}

export default App;
