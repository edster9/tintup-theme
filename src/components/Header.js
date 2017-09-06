import React, {Component} from 'react';
import classNames from 'classnames'

class Header extends Component {
	constructor(props) {
		super(props);

		this.state = {

		}
	}

	componentDidMount() {

	}

	classesActiveMenu(hashPath) {
		if (window.location.hash === '#/' && hashPath === '#/search') {
			return classNames(
				'active-header'
			);
		}

		return classNames(
			{'active-header': (hashPath === window.location.hash)}
		);
	}

	render() {
		return (
			<header>
				<div className="container-fluid custom-container">
					<div className="row no_row row-header">
						<div className="header-menu-block">
							<button className="cmn-toggle-switch cmn-toggle-switch__htx"><span></span></button>
							<ul className="header-menu" id="one">
								<li className={this.classesActiveMenu('#/search')}><a href="/#/search">Search by Tags</a></li>
								<li className={this.classesActiveMenu('#/home')}><a href="/#/home">All Feeds</a></li>
							</ul>
						</div>
					</div>
				</div>
			</header>
		)
	}
}

export default Header;