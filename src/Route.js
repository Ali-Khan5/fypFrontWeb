

import React, { Component } from 'react';
import { Route, Router } from 'react-router-dom';
import Home from './FullPageComponents/Home';
import createBrowserHistory from "history/createBrowserHistory";
import Navbar from './Layout/header';
import About  from "./FullPageComponents/About";
import Faq from './FullPageComponents/Faq';
import Instructions from './FullPageComponents/Instruct';
const history = createBrowserHistory()



class Routers extends Component {
    render() {
        return (
            <Router history={history}>
            <div>
                <Navbar/>
                <Route exact path="/" component={Home} />
                <Route exact path="/" component={About}/>
                <Route exact path="/" component={Faq}/>
                <Route exact path="/instruct" component={Instructions}/>
            </div>
            </Router>
        )
    }
}

export default Routers;