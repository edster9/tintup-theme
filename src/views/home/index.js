import React, {Component} from 'react';

import Header from '../../components/Header'
import Feeds from '../../components/Feeds'

// Home view for showing all the Tint feeds without the TAGS selector
class Home extends Component {
	constructor(props) {
		super(props);

		this.state = {

		}
	}

	render() {
		return (
			<div>
				{/* THE HEADER */}
				<Header/>
				{/* MAIN CONTENT */}
				<div id="content-block">
					<div className="head-bg">
						<div className="head-bg-img"></div>
						<div className="head-bg-content"></div>
					</div>

					<div className="container-fluid custom-container">
						<div className="row">

							<div className="col-md-12">
								<Feeds feeds={this.props.feeds}/>
							</div>

						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Home;