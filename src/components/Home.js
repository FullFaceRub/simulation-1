import React, { Component } from 'react';
import logo from '../assets/logo.png';
import {Link} from 'react-router-dom';
// import '../reset.css';
// import '../App.css';

export default class Home extends Component {
    render() {
        return (
            <div>
                <div className='mainheader'><img src={logo} alt="logo" /><div>SHELFIE</div></div>
                <div className="maincontent">
                    <Link to='/shelfA' className="button"><div>Shelf A</div></Link>
                    <Link to='/shelfB' className="button"><div>Shelf B</div></Link>
                    <Link to='/shelfC' className="button"><div>Shelf C</div></Link>
                    <Link to='/shelfD' className="button"><div>Shelf D</div></Link>
                </div>
            </div>
        )
    }
}