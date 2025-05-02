import React, { Component } from "react";
import {Router, Route, Switch, HashRouter} from "react-router-dom";
import history from "./History";
import HomeOne from "./components/HomeOne";
import HomeTwo from "./components/HomeTwo";
import HomeThree from "./components/HomeThree";
import Services from "./components/Services";
import Blog from "./components/Blog";
import BlogDetails from "./components/BlogDetails";
import Team from "./components/Team";
import ServiceSingle from "./components/ServiceSingle";
import Shop from "./components/Shop";
import ShopSingle from "./components/ShopSingle";
import Cart from "./components/Cart";

class Routes extends Component {
    render() {
        return (
            <Router history={history}>
                <HashRouter basename="/">
                    <Switch>
                        <Route exact path={'/'} render={(props) => (<HomeOne {...props} />)} />
                        <Route exact path={'/home-one'} render={(props) => (<HomeOne {...props} />)} />
                        <Route exact path={'/home-two'} render={(props) => (<HomeTwo {...props} />)} />
                        <Route exact path={'/home-three'} render={(props) => (<HomeThree {...props} />)} />
                        <Route exact path={'/services'} render={(props) => (<Services {...props} />)} />
                        <Route exact path={'/blog'} render={(props) => (<Blog {...props} />)} />
                        <Route exact path={'/blog-details'} render={(props) => (<BlogDetails {...props} />)} />
                        <Route exact path={'/team'} render={(props) => (<Team {...props} />)} />
                        <Route exact path={'/service-single'} render={(props) => (<ServiceSingle {...props} />)} />
                        <Route exact path={'/shop'} render={(props) => (<Shop {...props} />)} />
                        <Route exact path={'/shop-single'} render={(props) => (<ShopSingle {...props} />)} />
                        <Route exact path={'/cart'} render={(props) => (<Cart {...props} />)} />
                    </Switch>
                </HashRouter>
            </Router>
        )
    }
}

export default Routes;