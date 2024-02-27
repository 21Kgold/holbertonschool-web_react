import React from 'react';
import {StyleSheet, css} from 'aphrodite';


class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      enableSubmit: false
    };
  }

  handleLoginSubmit = (event) => {
    // console.log('Form has been submited');
    event.preventDefault();  // prevents form’s default behavior of refreshing the page
    this.props.logIn(this.state.email, this.state.password);
  }

  handleChangeEmail = (event) => {
    this.setState({ email: event.target.value}, this.handleDisableSubmit);
  }

  handleChangePassword = (event) => {
    this.setState({ password: event.target.value}, this.handleDisableSubmit)
  }

  // true when both fields are not empty
  handleDisableSubmit = () => {
    if (this.state.email !== '' && this.state.password !== '') {
      this.setState({enableSubmit: true});
    } else {
      this.setState({enableSubmit: false});
    }
  }

  render() {
    const {isLoggedIn, email, password, enableSubmit} = this.state
    return (
      <>
          <div className={css(styles.AppBody)}>
            <p>Login to access the full dashboard</p>
            <form onSubmit={this.handleLoginSubmit}>
              <label className={css(styles.AppBodyLabel)}>Email:
                <input className={css(styles.AppBodyInput)} name="email" type="email" value={email} onChange={this.handleChangeEmail}/>
              </label>
              <label className={css(styles.AppBodyLabel)}>Password:
                <input className={css(styles.AppBodyInput)} name="password" type="password" value={password} onChange={this.handleChangePassword}/>
              </label>
              <input type="submit" value="Login" disabled={!enableSubmit} className={css(styles.AppBodyButton)}/>
            </form>
          </div>
      </>
    );
  }
}

const styles = StyleSheet.create({
  AppBody: {
    marginLeft: '22%',
    fontSize: 'calc(8px + 1vmin)',
    fontWeight: '500',
    textAlign: 'left',
    fontFamily: 'Arial, Helvetica, sans-serif',
    '@media (max-width: 900px)': {
      minHeight: '3vh',
      marginLeft: '1%',
    },
  },
  
  AppBodyLabel: {
    paddingRight: '20px',
    '@media (max-width: 900px)': {
      padding: '5px 0px',
      display: 'block',
    },
  },

  AppBodyInput: {
    '@media (max-width: 900px)': {
      border: 'none',
    },
  },
    
  AppBodyButton: {
    backgroundColor: 'transparent',
    border: '0.5px solid gray',
  }
});

export default Login;
