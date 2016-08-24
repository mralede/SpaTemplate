import Bootstrap from 'bootstrap/dist/css/bootstrap.css';


import React from "React";

import configFileName from "./config.json"

import Navigation from "./navigation/navigation.component"

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
				<Navigation />
				<div className="container-fluid">
					{this.props.children}
				</div>
			</div>
		);
	}
});

export default App;