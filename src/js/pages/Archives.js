import React from 'react';

export default class Archives extends React.Component {

	render() {
		const {params} = this.props;

		return (
			<h1>Archives ({params.article})</h1>
		);
	}
}