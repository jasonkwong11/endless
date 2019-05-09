import React, { Component } from 'react';

const endpoint = 'https://uqnzta2geb.execute-api.us-east-1.amazonaws.com/default/FrontEndCodeChallenge'

class Footer extends Component {
	constructor() {
		super();
		this.state = {
			data: []
		}
	}

	componentDidMount() {
		this.getData(endpoint)
	}

	transformData = steps => {
		const sortedSteps = steps.sort((a, b) => {
			return parseInt(a.stepNumber) - parseInt(b.stepNumber);
		})
		const data = sortedSteps.map(step => {
			const contents = step.versionContent;
			let latestContent = contents[0]
			contents.forEach(obj => {
				if (new Date(obj.effectiveDate) > new Date(latestContent.effectiveDate)){
					latestContent = obj
				}
			})
			return {
				title: latestContent.title,
				body: latestContent.body
			}
		})
		this.setState({ data });
	}

	getData = endpoint => 
	    fetch(endpoint)
	      .then(response => response.json())
	      .then(data => this.transformData(data))
	      .catch(err => {
	      	console.error('error retrieving data: ', err)
	      })

	renderContent = ({ title, body }, index) => <div className="item col-3">
		<h2 className="content" id="step">{`0${index + 1}`}</h2>
		<h4>{title}</h4>
		<p>{body}</p>
	</div>

	renderCards = contents => contents.map((obj, index) => {
		return this.renderContent(obj, index)
	})

	render() {
		return (
			<div className="footer-container col-12">
				<div className="footer-title row col-12">
					<h1>How It Works</h1>
				</div>
				<div className="footer row">
					{ this.state.data && this.renderCards(this.state.data) }
				</div>
			</div>
		)
	}
}

export default Footer;