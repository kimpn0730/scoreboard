import React from 'react';
import './App.css';
import { Header } from './components/Header';
import { Player } from './components/Player';

class App extends React.Component {
	state = {
		players: [
			{name: 'LDK', score: 0, id: 1},
			{name: 'HONG', score: 10, id: 2},
			{name: 'KIM', score: 20, id: 3},
			{name: 'PARK', score: 30, id: 4},
		]
	}
	constructor() {
		super();
		this.handleRemovePlayer = this.handleRemovePlayer.bind(this);
	}
	render() {
		return (
			<div className="scoreboard">
				<Header title="My Scoreboard" totalPlayers={11} />

				{/*Player List*/}
				{
					this.state.players.map(player => {
						return (
							<Player name={player.name} key={player.id}
											id={player.id}
											score={player.score}
											removePlayer={this.handleRemovePlayer}/>
						)
					})
				}
			</div>
		)
	}
	handleRemovePlayer(id) {
		console.log(this);
		console.log('handleRemovePlayer', id);
		this.setState(prevState => {
			const players = prevState.players.filter(player => player.id !== id)
			return {players}
		})
	}
}

export default App;
