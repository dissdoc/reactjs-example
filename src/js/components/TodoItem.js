import React from 'react';

export default class TodoItem extends React.Component {

	constructor(props) {
		super();
	}

	render() {
		const { title, description } = this.props;

		return (
			<li>
				<h4>{title}</h4>
				<span>{description}</span>
			</li>
		);
	}

}