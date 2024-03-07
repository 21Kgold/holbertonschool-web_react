import React, {Component} from 'react';
import logo from '../assets/logo_h.jpg';
import {StyleSheet, css} from 'aphrodite';
import AppContext from '../App/AppContext';


class Header extends Component {
  constructor(props) {
    super(props);
  }

  static contextType = AppContext;

  render() {
    return (
      <>
      <div className={css(styles.header)}>
        <img src={logo} className={css(styles.AppLogo)} />
        <h1>School dashboard</h1>
      </div>

      
      {this.context.user.isLoggedIn &&
      (<div id='logoutSection'>
        Welcome 
        <strong> {this.context.user.email}</strong>
        <a className={css(styles.logOutLink)} onClick={this.context.logOut}> logout </a>
        </div>)
      }
      </>
    );
  }
}

const styles = StyleSheet.create({
  AppLogo: {
    height: '23vh',
    pointerEvents: 'none',
  },
  
  header: {
    minHeight: '24vh',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    fontSize: 'calc(8px + 0.9vh)',
    textAlign: 'center',
    fontFamily: 'Arial, Helvetica, sans-serif',
    color: '#e0003c'
  },

  logOutLink: {
    color: 'blue'
  }
})

export default Header;
