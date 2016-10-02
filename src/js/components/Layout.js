import React from 'react';

import Header from './Header';
import Footer from './Footer';

export default class Layout extends React.Component {
	
	constructor() {
		super();
	}

	render() {
		const { location } = this.props;
		const containerStyle = {
			marginTop: '60px',
			marginBottom: '60px'
		};

		return (
			<div>
				<Header location={location} />

				<div style={containerStyle}>
					{ this.props.children }
				</div>

				<Footer />
			</div>			
		);	
	}
}