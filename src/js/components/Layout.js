import React from 'react';
import {Link} from 'react-router';

import Header from './Header';
import Footer from './Footer';

export default class Layout extends React.Component {
	
	constructor() {
		super();
		this.state = {
			title: 'React Test'
		}
	}

	changeTitle(title) {
		this.setState({title});
	}

	navigate() {
		this.props.history.pushState(null, '/');	
	}

	render() {
		setTimeout(() => {
			this.setState({title: 'Welcome!'});
		}, 2000);

		const {history} = this.props;
		console.log(history.isActive('archives'));

		return (
			<div>
				<Header changeTitle={this.changeTitle.bind(this)} title={this.state.title} />

				{ this.props.children }
				<Link to="archives">archives</Link>
				<Link to="settings">settings</Link>
				<button onClick={this.navigate.bind(this)}>Featured</button>

				<Footer />
			</div>			
		);	
	}
}