//sim1 37e-1
import React, { Component } from 'react';
import logo from './assets/logo.png';
import './reset.css';
import './App.css';
import {Link} from 'react-router-dom';
import routes from './routes';
// import Home from './components/Home';

class App extends Component {
  
  render() {
    return (
      //36G
      <div className="App">
        {/* <Home/> */}
        {routes}
      </div>
    );
  }
}

export default App;
