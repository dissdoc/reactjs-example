import React from 'react';

import Header from './Header';
import Footer from './Footer';

export default class Layout extends React.Component {
	
	constructor() {
		super();
		this.state = {
			title: 'React Test'
		}
	}

	render() {
		setTimeout(() => {
			this.setState({title: 'Welcome!'});
		}, 2000);

		return (
			<ul>
				<Header title={this.state.title} />
				<Footer />
			</ul>			
		);	
	}
}