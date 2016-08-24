import React from "react"
import NavLink from "./navLink.component";

const Navigation = React.createClass({
	propTypes: {

	},
	getDefaultProps() {
		return {
      
		};
	},
	render() {
		return (
			<nav className="navbar navbar-default">
				<div className="container-fluid">
					<div className="navbar-header">
						<a className="navbar-brand" href="/">
							My app
						</a>
					</div>
					<ul className="nav navbar-nav">
						<NavLink to="/home"  >Home</NavLink>
						<NavLink to="/about"  >About</NavLink>
					</ul>
				</div>
			</nav>		
		);
	}
});

export default Navigation;