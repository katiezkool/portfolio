import React from 'react';
import './App.css';
import {
    BrowserRouter,
    Switch,
    Route
} from 'react-router-dom'
import Projects from './Projects'
import Home from './Home'
import Pictures from './Pictures'
import References from './References'

export default () => (
    <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/projects" component={Projects}/>
            <Route path="/pictures" component={Pictures}/>
            <Route path="/contactme" component={References}/>
        </Switch>
    </BrowserRouter>
)

