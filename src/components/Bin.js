import React, { Component } from 'react';
import logo from '../assets/logo.png';

//36G, 37D, 37E-1, 37E-2
export default class Bin extends Component {
    render() {
        return (<div>
            <div className="binheader"><div><img src={logo} alt="logo"/></div>
                    <div>SHELFIE</div>
                    <div>Shelf A</div>
                    <div>Bin 1</div>
                    </div>
            <div className="form">
                <input placeholder="Name" onChange={e => this.handleName(e.target.value)}></input>
                <input placeholder="Price" onChange={e => this.handlePrice(e.target.value)}></input>
                <div className='buttons'>
                    <button className='eachbutton' onClick={this.handleEdit}>Edit</button>
                    <button className='eachbutton' onClick={this.handleDelete}>Delete</button>
                </div>
            </div>
            </div>
        )
    }
}