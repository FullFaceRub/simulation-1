import React, { Component } from 'react';
import './Shelf.css';
import logo from '../assets/logo.png';
import axios from 'axios';

//sim1 37E-2
export default class ShelfA extends Component {
    constructor() {
        super();
        this.state = {
            nameinput: '',
            priceinput: null
        }
        this.handleName = this.handleName.bind(this);
        this.handlePrice = this.handlePrice.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }

    handleDelete() {
        this.setState({
            nameinput: '',
            priceinput: null
        })

    }
    handleEdit() {
        let name = this.state.nameinput;
        let priceinput = this.state.priceinput;

        axios.put()
    }
    handleName(e) {
        this.setState({
            nameinput: e
        })
    }
    handlePrice(e) {
        this.setState({
            priceinput: e
        })
    }
    //sim1 36F
    render() {
        return (
            <div>
                <div className='header'>
                    <div><img /></div>
                    <div></div>
                    <div></div>
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