import React from 'react';
import ReactDOM from 'react-dom';

class Layout extends React.Component {
	constructor() {
		super();
		this.message = "It works";
	}

	render() {
		const name = "Dissdoc";

		return (
			<h1>{this.message}, {name}!</h1>
		);	
	}
}

const app = document.getElementById('app');

ReactDOM.render(<Layout/>, app);