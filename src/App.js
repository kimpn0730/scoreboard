import React from 'react';
import './App.css';
import { Header } from './components/Header';
import { Player } from './components/Player';

//  function 컴포넌트에서 class 컴포넌트로 변경
class App extends  React.Component {
  state = {
    players: [
      {name: 'LDK', id: 1},
      {name: 'HONG', id: 2},
      {name: 'KIM', id: 3},
      {name: 'PARK', id: 4},
    ]
  }
  constructor(){
    super();
    this.handleRemovePlayer = this.handleRemovePlayer.bind(this);

  }

  render() {
    return (
      <div className="scoreboard">
        <Header title="My Scoreboard" totalPlayers={11}/>

        {/*Player List*/}
        {
          this.state.players.map(player => {
            return (
              <Player name={player.name} key={player.id} id={player.id} removePlayer={this.handleRemovePlayer}/>
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

// 1. state를 가진 부모에서 삭제하는 콜백펑션을 만든다.
// 2. 자식에게 콜백펑션을 props로 내려준다.
// 3. 클릭시 자식이 콜백펑션을 호출
// 4. prototype 완성


export default App;
