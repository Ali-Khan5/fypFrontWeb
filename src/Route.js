import React, { Component } from 'react';
import { Route, Router } from 'react-router-dom';
import Home from './FullPageComponents/Home';
// import createBrowserHistory from "history/createBrowserHistory";
import Navbar from './Layout/header';
import About  from "./FullPageComponents/About";
import Faq from './FullPageComponents/Faq';
import Instructions from './FullPageComponents/Instruct';
import HomePage from "./FullPageComponents/MainScreen";
// const history = createBrowserHistory()
// import { Router, Route} from 'react-router-dom';
import history from './History';


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
                <Route exact path="/homepage" component={HomePage}/>
            </div>
            </Router>
        )
    }
}

export default Routers;