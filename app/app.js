import React, { Component } from 'react';
import ReactDOM from 'react-dom';

require("./stylesheets/main.scss");

class Index extends Component {
	render() {
		return (
			<div>
				<h1>Hello World</h1>
			</div>
		);
	}
}

const app = document.getElementById('app');

ReactDOM.render(<Index />, app);