import React, {Component} from 'react';
import Notifications from '../Notifications/Notifications';
import Login from '../Login/Login';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import CourseList from '../CourseList/CourseList';
// import PropTypes from 'prop-types';
import { getLatestNotification } from '../utils/utils';
import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom';
import BodySection from '../BodySection/BodySection';
import WithLogging from '../HOC/WithLogging';
import {StyleSheet, css} from 'aphrodite';
import AppContext from './AppContext';
import {user, logOut} from './AppContext';


class App extends Component {
  constructor(props) {
    super(props);
    const value = {
      user: user,
      logOut: this.logOut
    }
    const listNotifications = [
      {id: 1, type: 'default', value: 'New course available'},
      {id: 2, type: 'urgent', value: 'New resume available'},
      {id: 3, type: 'urgent', html: {__html: getLatestNotification()}},
    ];
    this.state = { 
      displayDrawer: false,
      value,
      listNotifications
    };
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
      this.state.logOut();
    }
  }

  handleDisplayDrawer = () => {
    this.setState({
      displayDrawer: true
    });
  }

  handleHideDrawer = () => {
    this.setState({
      displayDrawer: false
    });
  }

  logIn = (email, password) => {
    this.setState({
      value: {
        ...this.state.value,
        user: {
          email: email,
          password: password,
          isLoggedIn: true,
        },
      }
    });
  }

  logOut = () => {
    this.setState({
      value: {
        ...this.state.value,
        user: user
      }
    });
  }

  markNotificationAsRead = (id) => {
    const updatedListNotifications = this.state.listNotifications.filter(obj => obj.id !== id);
    this.setState({
      listNotifications: updatedListNotifications,
    });
  }

  render() {
    

    const listCourses = [
      {id: 1, name: 'ES6', credit: 60},
      {id: 2, name: 'Webpack', credit: 20},
      {id: 3, name: 'React', credit: 40}
    ];

    const { displayDrawer, value } = this.state;
    let LoginHOC = WithLogging(Login);
    let displayScreen;
    if (value.user.isLoggedIn === false) {
      displayScreen =
      <div>
        <BodySectionWithMarginBottom title={'Log in to continue'}> <LoginHOC logIn={this.logIn} /> </BodySectionWithMarginBottom>
      </div>
    } else {
      displayScreen =
      <div>
        <BodySectionWithMarginBottom title={'Course list'}>
          <CourseList listCourses={listCourses}/>
        </BodySectionWithMarginBottom>
      </div>
    }
    return (
      <AppContext.Provider value={value}>
        <Notifications
          listNotifications={this.state.listNotifications}
          displayDrawer={displayDrawer}
          handleDisplayDrawer={this.handleDisplayDrawer}
          handleHideDrawer={this.handleHideDrawer}
          markNotificationAsRead={this.markNotificationAsRead}
        />
        <div className="App">
          <Header/>
          <hr className={css(styles.sectionLine)}></hr>
          <div className={css(styles.body)}>
            {displayScreen}
            </div>
            <div  className={css(styles.news)}>
            <BodySection title='News from the School' children={<p>Some random text</p>}></BodySection>
            </div>
          
            <hr className={css(styles.sectionLine)}></hr>
            <div className={css(styles.footer)}>
              <Footer/>
            </div>
          
        </div>
      </AppContext.Provider>
    );
  }
}

App.propTypes = {}

App.defaultProps = {}

const styles = StyleSheet.create({
  sectionLine: {
    height: '3.5px',
    backgroundColor: '#e0003c',
  },

  footer: {
    minHeight: '5vh',
    fontSize: 'calc(8px + 1vmin)',
    fontStyle: 'italic',
    fontWeight: '500',
    textAlign: 'center',
    fontFamily: 'Arial, Helvetica, sans-serif',
  },

  body: {
    minHeight: '25vh',
    marginTop: '3%',
  },

  news: {
    minHeight: '5vh',
    marginTop: '7%',
  }
});

export default App;
