import React, { Component } from 'react';
import './Shelf.css';
import logo from '../assets/logo.png';
import axios from 'axios';
import {Link, Switch, Route} from 'react-router-dom';
import Bin from './Bin';

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
                    <div><img src={logo} alt="logo"/></div>
                    <div>SHELFIE</div>
                    <div>Shelf A</div>
                </div>
                <Link to='/shelfA/bin1' className="bin">+ Add Inventory to bin</Link>
                <Link to='/shelfA/bin2' className="bin">+ Add Inventory to bin</Link>
                <Link to='/shelfA/bin3' className="bin">+ Add Inventory to bin</Link>
                <Link to='/shelfA/bin4' className="bin">+ Add Inventory to bin</Link>
                <Link to='/shelfA/bin5' className="bin">+ Add Inventory to bin</Link>

                <div>
                    <Switch>
                        <Route path='/shelfA/bin1' render={(props)=>{
                            //36E, 36H
                            <Bin 
                            price={this.handlePrice}
                            name={this.handleName}
                            edit={this.handleEdit}
                            delete={this.handleDelete}/>
                        }}/>
                        <Route path='/shelfA/bin2' render={(props)=>{
                            <Bin 
                            price={this.handlePrice}
                            name={this.handleName}
                            edit={this.handleEdit}
                            delete={this.handleDelete}/>
                        }}/>
                        <Route path='/shelfA/bin3' render={(props)=>{
                            <Bin 
                            price={this.handlePrice}
                            name={this.handleName}
                            edit={this.handleEdit}
                            delete={this.handleDelete}/>
                        }}/>
                        <Route path='/shelfA/bin4' render={(props)=>{
                            <Bin 
                            price={this.handlePrice}
                            name={this.handleName}
                            edit={this.handleEdit}
                            delete={this.handleDelete}/>
                        }}/>
                        <Route path='/shelfA/bin5' render={(props)=>{
                            <Bin 
                            price={this.handlePrice}
                            name={this.handleName}
                            edit={this.handleEdit}
                            delete={this.handleDelete}/>
                        }}/>
                    </Switch>
                    </div>
            </div>
        )
    }
}