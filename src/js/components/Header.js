import React from 'react';
import { IndexLink, Link } from 'react-router';

export default class Header extends React.Component {
	
	render() {
		const { location } = this.props;

		return (
			<div>
				<ul>
					<li class="logo">Menu</li>
					<li>
						<IndexLink to="/">Featured</IndexLink>
					</li>
					<li>
						<Link to="archives">Archive</Link>
					</li>
					<li>
						<Link to="settings">Settings</Link>
					</li>
				</ul>

				<p>{ location.pathname }</p>
			</div>
		);
	}
}