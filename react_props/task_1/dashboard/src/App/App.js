import React from 'react';
import Notifications from '../Notifications/Notifications';
import Login from '../Login/Login';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import './App.css';

const App = () => {
  return (
    <>
    <Notifications />
    <div className="App">
      <Header/>
      <Login/>
      <Footer/>
    </div>
    </>
  );
}

export default App;
