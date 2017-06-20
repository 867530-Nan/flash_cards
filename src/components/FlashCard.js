import React from 'react';

class FlashCard extends React.Component {
	constructor(props){
		super(props);
		this.state = { showAnswer: false };
	}

	displayBack = () => {
		if(this.state.showAnswer) {
			return(
				<p>
				<i><b>Answer: { this.props.card.back } </b></i>
				</p>
			)
		}
	}

	toggleAnswer = () => {
		this.setState({ showAnswer: !this.state.showAnswer });
	}


	render () {
		let { title, front, back } = this.props.card;

		return(
			<div className='col m4 card individual'>
				<h5> { title }</h5>
				<hr />
				<p> { this.state.showAnswer === false ? front : null } </p>
				{ this.displayBack() }
				<button className='btn flip deep-purple lighten-2' onClick={this.toggleAnswer}>Flip Card</button>
				<button className="btn flip blue lighten-2" id="delete-game">Delete Card</button>
				<button className="btn flip indigo lighten-2" id="edit-question">Edit Question</button>
				<button className="btn flip orange lighten-2" id="edit-answer">Edit Answer</button>
  			
			</div>
		);
	}
}

export default FlashCard;