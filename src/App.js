import React from 'react';
import './App.css';
import {
    BrowserRouter,
    Switch,
    Route
} from 'react-router-dom'
import Skills from './Skills'
import Home from './Home'
import Education from './Education'
import WorkXP from './WorkXP'
import References from './References'

export default () => (
    <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/skills" component={Skills}/>
            <Route path="/education" component={Education}/>
            <Route path="/workxp" component={WorkXP}/>
            <Route path="/references" component={References}/>
        </Switch>
    </BrowserRouter>
)

