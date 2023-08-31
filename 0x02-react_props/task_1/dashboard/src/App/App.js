import React from 'react';
import './App.css';
//import logo from '../assets/holberton_logo.jpg';
// import { getFooterCopy, getFullYear } from '../utils/utils';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Login from '../Login/Login'
import Notifications from '../Notifications/Notifications';

function App() {
  return (
    <div>
      <Notifications></Notifications>
    
    <div className="App">
      <Header></Header>
      
      <div className="App-body">
        <Login></Login>
      </div>
      <div className="App-footer">
        <Footer></Footer>
      </div>
    </div>
    </div>
  );
}

export default App;
