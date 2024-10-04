import logo from './logo_h.jpg';
import './App.css';
import { getFullYear, getFooterCopy } from './utils';

function App() {
  return (
    <div className='App'>
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>School dashboard</h1>
      </div>
      <hr></hr>
      <div className='App-body'>
        <p>Login to access the full dashboard</p>
        <form action="/submit" method="post">
          <label for="email">Email:</label>
          <input type="text" id="email" name="email" required/>
  
          <label for="password">Password:</label>
          <input type="password" id="password" name="password" required/>

          <button>OK</button>
  
        </form>
      </div>
      <hr></hr>
      <div className='App-footer'>
        <p>Copyright {getFullYear()} - {getFooterCopy(true)}</p>
      </div>
    </div>
  );
}

export default App;
