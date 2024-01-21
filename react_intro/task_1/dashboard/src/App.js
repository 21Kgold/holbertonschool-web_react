import logo from './logo_h.jpg';
import './App.css';
import { getFullYear } from './utils';
import { getFooterCopy } from './utils';

function App() {
  return (
    <div className="App">
      <header>
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>School dashboard</h1>
        </div>
        <hr></hr>
      </header>
        <div className="App-body">
          <p>Login to access the full dashboard</p>
        </div>
        <hr></hr>
      <footer>
        <div className="App-footer">
          <p>Copyright {getFullYear()} - {getFooterCopy(true)}</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
