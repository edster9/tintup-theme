import React, {Component} from 'react';
import classNames from 'classnames'

/* global $ */

class Feeds extends Component {
	constructor(props) {

		super(props);

		this.renderFeedItem = this.renderFeedItem.bind(this);

		this.state = {

		}
	}

	componentDidMount() {

	}

	componentDidUpdate() {
		//console.log('Feeds:componentDidUpdate()');

		$('.container-mix').mixItUp(
			{
				animation: {
					duration: 400,
					effects: 'fade translateZ(-360px) stagger(34ms)',
					easing: 'ease'
				}
			}
		);

	}

	classesFeedItem(feedItem) {
		return classNames(
			'mix',
			'custom-column-5',
			feedItem.tags
		);
	}

	renderFeedItem(feedItem, i) {
		//console.log('Feeds:renderFeedItem()', feedItem);

		let authorData = JSON.parse(feedItem.author);

		return (
			<div className={this.classesFeedItem(feedItem)} key={i}>
				<div className="be-post">
					<a href={feedItem.url} target="_none" className="be-img-block">
						<img src={feedItem.image} alt="omg"/>
					</a>
					<a href={feedItem.url} target="_none" className="be-post-title">{feedItem.comments}</a>
					<div className="author-post">
						<img src={authorData.picture} alt="" className="ava-author"/>
						<span>by <a href={authorData.link} target="_none">{authorData.name}</a></span>
					</div>
					<div className="info-block">
						<span><i className="fa fa-thumbs-o-up"></i> {feedItem.likes_count}</span>
						<span><i className="fa fa-comment-o"></i> {feedItem.replies_count}</span>
					</div>
				</div>
			</div>
		)
	}

	render() {
		return (
			<div className="container-mix row _post-container_">

				{this.props.feeds.map(this.renderFeedItem)}

			</div>
		)
	}
}

export default Feeds;