import React, {Component} from 'react';

/* global $ */

class Tags extends Component {
	constructor(props) {
		super(props);

		this.state = {

		}
	}

	resetTags() {
		$('.container-mix').mixItUp('filter', 'all');
	}

	componentDidMount() {

	}

	render() {
		return (
			<div>
				<div className="be-vidget">
					<h3 className="letf-menu-article">
						Popular Tags
					</h3>
					<div className="tags_block clearfix">
						<ul>
							<li><a data-filter=".parents" className="filter">Parents</a></li>
							<li><a data-filter=".family" className="filter">Family</a></li>
							<li><a data-filter=".andrew" className="filter">Andrew</a></li>
							<li><a data-filter=".anthony" className="filter">Anthony</a></li>
							<li><a data-filter=".brothers" className="filter">Brothers</a></li>
						</ul>
					</div>
				</div>
				<hr />
				<div>
					<button onClick={this.resetTags} className="btn btn-primary">Reset Tags</button>
				</div>
			</div>

		)
	}
}

export default Tags;