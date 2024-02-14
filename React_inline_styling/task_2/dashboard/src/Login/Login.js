import React from 'react';
import {StyleSheet, css} from 'aphrodite';

const styles = StyleSheet.create({
  AppBody: {
    minHeight: '35vh',
    marginTop: '60px',
    marginLeft: '60px',
    fontSize: 'calc(8px + 1vmin)',
    fontWeight: '500',
    textAlign: 'left',
    fontFamily: 'Arial, Helvetica, sans-serif',
  },
  
  AppBodyLabel: {
    paddingRight: '20px',
  },
    
  AppBodyButton: {
    backgroundColor: 'transparent',
    border: '0.5px solid gray',
  }
})

function Login() {
  return (
    <>
        <div className={css(styles.AppBody)}>
          <p>Login to access the full dashboard</p>
          <form>
            <label className={css(styles.AppBodyLabel)}>Email:
              <input type="email"/>
            </label>
            <label className={css(styles.AppBodyLabel)}>Password:
              <input type="password"/>
            </label>
            <button className={css(styles.AppBodyButton)}>OK</button>
          </form>
        </div>
    </>
  );
}

export default Login;
