import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { withCookies } from 'react-cookie';

import Error from "./components/Error/Error";
import Drawer from "./components/Drawer/Drawer";
import Home from "./components/Home/Home"
import Project from "./components/Project/Project";
import ChooseProject from "./components/ChooseProject/ChooseProject";
import About from "./components/About/About";

import './App.scss';


class App extends Component {
    /** =======================================================================
     * 
     * RENDER
     * 
     ======================================================================= */
    render() {
        return (
            <BrowserRouter>
                <div id="app">
                    <div className="componentDrawer">
                        <Drawer cookies={this.props.cookies} />
                    </div>
                    <div className="componentContent">
                        <Switch>
                            <Route path="/" exact render={(props) => (
                                <Home cookies={this.props.cookies} {...props} />
                            )} />
                            <Route path="/project/:id" component={ Project } />
                            <Route path="/proj" component={ ChooseProject } />
                            <Route path="/about" component={ About } />
                            <Route component={ Error } />
                        </Switch>
                    </div>
                </div>
            </BrowserRouter>
        );
    }
}

export default withCookies(App);
