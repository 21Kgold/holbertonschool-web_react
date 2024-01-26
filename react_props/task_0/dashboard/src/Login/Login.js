import React from 'react';
import './Login.css';

function Login() {
  return (
    <>
        <hr></hr>
        <div className="App-body">
          <p>Login to access the full dashboard</p>
          <form>
            <label>Email:
              <input type="email"/>
            </label>
            <label>Password:
              <input type="password"/>
            </label>
            <button>OK</button>
          </form>
        </div>
        <hr></hr>
    </>
  );
}

export default Login;
