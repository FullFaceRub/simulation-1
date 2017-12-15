import React from 'react';
import { Switch, Route } from 'react-router-dom';
import App from './App.js';
import ShelfA from './components/ShelfA';
import ShelfB from './components/ShelfB';
import ShelfC from './components/ShelfC';
import ShelfD from './components/ShelfD';


//sim1 42F,42G,42H,
export default (
    <Switch>
        <Route exact path='/' component={App}/>
        <Route exact path='/shelfA' component={ShelfA}/>
        <Route exact path='/shelfB' component={ShelfB}/>
        <Route exact path='/shelfC' component={ShelfC}/>
        <Route exact path='/shelfD' component={ShelfD}/>
    </Switch>
)