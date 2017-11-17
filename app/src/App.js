import React , { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Search from './ui/components/search';
import Home from './ui/components/home';
import Example from './ui/components/example';
import TopComponent from './ui/components/TopComponent';
import NotFound from './ui/components/NotFound'

export default class App extends Component {
    render(){
        return (
            <div>
                <Switch>
                    <Route exact path ='/' component = {Home} />
                    <Route path = "/search" component = {Search} />
                    <Route path = "/ex" component = {Example} />
                    <Route component = {NotFound} />
                </Switch>
            </div>
        )
    }
}