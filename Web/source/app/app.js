import React from "React";

import configFileName from "./config.json"

import Home from "./home/home.component"
import About from "./about/about.component"

const App = React.createClass({
	propTypes: {

	},
	getDefaultProps() {
		return {
      
		};
	},
	render() {
		return (
			<div>
				<Home />
				<About />
			</div>
		);
	}
});

export default App;