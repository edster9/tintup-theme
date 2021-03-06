import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom'
import q from 'q'

import Home from './views/home'
import Search from './views/search'

/* global $ */

class App extends Component {
	constructor(props) {
		super(props);

		// Capture the hash history events so the jquery mixitup plugin can be re-initiated as needed
		// Also the menu (hamburger) button needs to be reset during a hash navigation
		const {history} = this.props;
		history.listen((location) => {

			$('.container-mix').mixItUp(
				{
					animation: {
						duration: 400,
						effects: 'fade translateZ(-360px) stagger(34ms)',
						easing: 'ease'
					}
				}
			);

			this.setupMenus();
		});

		// Initial empty state with no Tint feeds
		this.state = {
			feeds: []
		}
	}

	// Top menu jquery logic for smooth on/off effects
	setupMenus = () => {
		$(".cmn-toggle-switch").on("click", function(){
			if ($(this).hasClass("active")){
				$(this).removeClass("active");
				$('body').removeClass('menu-open')
			} else{
				$(this).addClass("active");
				$('body').addClass('menu-open')
			}
			$(".header-menu").stop().slideToggle();
			$(".large-popup").slideUp();
			return false;
		});

		$(".header-menu i").on("click", function(){
			if($(window).width() < 1200){
				if ( $(this).hasClass("fa-angle-down") ) {
					$(this).removeClass("fa-angle-down");
					$(this).addClass("fa-angle-up") ;
					$(this).parent().find("ul:first").stop().slideToggle();
				}
				else {
					$(this).removeClass("fa-angle-up");
					$(this).addClass("fa-angle-down") ;
					$(this).parent().find("ul:first").stop().slideToggle();
				}
			}
		});
	}

	componentDidMount() {

		// Use the TintUp API to get the feeds for 'edsahakiantint1' tint and populated into React state
		q.fcall(function () {
			return $.ajax({
				url: 'https://api.tintup.com/v1/feed/edsahakiantint1?api_token=3cb1269d688e515fed2ea3ff8b2ecf028b083d7f',
				dataType: 'jsonp',
				cache: false
			});
		}).then(function (result) {
			//console.log('tintup feed data:', result);
			this.setState({feeds: result.data});
		}.bind(this));

		// TODO: Add Error handling for failed requests

	}

	render() {
		// Render all the common routes
		// Two main navigation pages at the moment 'Home' and 'Search'
		return (
			<Switch>
				<Route exact path='/' render={(props) => (
					<Search feeds={this.state.feeds} />
				)}/>
				<Route path='/search' render={(props) => (
					<Search feeds={this.state.feeds} />
				)}/>
				<Route path='/home' render={(props) => (
					<Home feeds={this.state.feeds} />
				)}/>
			</Switch>
		)
	}
}

export default App;
