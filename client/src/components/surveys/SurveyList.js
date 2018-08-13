import React, { Component } from 'react';
import { connect } from 'react-redux';

// actions
import { fetchSurveys } from '../../actions';

class SurveyList extends Component {
	componentDidMount() {
		this.props.fetchSurveys();
	}

	renderSurveys() {
		return this.props.surveys.reverse().map(survey => (
			<div className="card white-grey darken-3" key={survey._id}>
				<div className="card-content">
					<span className="card-title">{survey.title}</span>
					<p>{survey.body}</p>
					<p className="right">
						Sent On:{' '}
						{new Date(survey.dateSent).toLocaleDateString()}
					</p>
				</div>
				<div className="card-action">
					<a>Yes: {survey.yes}</a>
					<a>No: {survey.no}</a>
				</div>
			</div>
		));
	}

	render() {
		return <div>{this.renderSurveys()}</div>;
	}
}

const mapStateToProps = ({ surveys }) => {
	return { surveys };
};

export default connect(
	mapStateToProps,
	{ fetchSurveys },
)(SurveyList);
