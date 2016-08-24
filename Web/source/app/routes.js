import React from "react";
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory, DefaultRoute } from "react-router";

import App from "./app";
import Home from "./home/home.component";
import About from "./about/about.component";

let routes = (
		<Router history={browserHistory}>
			<Route path="/" component={App}>
				<Route path="/home" component={Home}/>
				<Route path="/about" component={About}/>
				<IndexRoute component={Home}/>
			</Route>
		</Router>
	);

export default routes;
