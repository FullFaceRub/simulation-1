//sim1 37e-1
import React, { Component } from 'react';
import logo from './assets/logo.png';
import './reset.css';
import './App.css';
import {Link} from 'react-router-dom';
import routes from './routes';

class App extends Component {
  constructor(){
    super();

    this.state={
      
    }
  }
  render() {
    return (
      //36G
      <div className="App">
        <div className='mainheader'><img src={logo} alt="logo"/><div>SHELFIE</div></div>
        <div className="maincontent">
          <Link to='/shelfA' className="button"><div>Shelf A</div></Link>
          <Link to='/shelfB' className="button"><div>Shelf B</div></Link>
          <Link to='/shelfC' className="button"><div>Shelf C</div></Link>
          <Link to='/shelfD' className="button"><div>Shelf D</div></Link>
          {routes}
        </div>
      </div>
    );
  }
}

export default App;
