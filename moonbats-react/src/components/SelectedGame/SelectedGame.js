import React, { Component } from 'react'
import axios from 'axios'
import './SelectedGame.css'

class SelectedGame extends Component {
  constructor() {
    super()
    this.state = {
      phases:['New','Waxing Crescent','First Quarter','Waxing Gibbous','Full','Waning Gibbous','Last Quarter','Waning Crescent'],
      gamePhase:0,
      date:[],
      id:0,
      teamid:0,
      chosenGame:{},
      opponent:'',
      team:'',
      teamName:'',
      matchingPhases:[],  //all moonphases that match the phase of the game date
      matchingGames:[]
    }
  }
  handleClick() {
    let self = this;
    axios.get(`http://localhost:3000/moonphases?date=${self.state.date}`).then((response) => {
     self.setState({
       matchingPhases: response.data,
       gamePhase:parseInt(response.data[0].phase)
     })
    axios.get(`http://localhost:3000/teams/${self.state.teamid}/pastgames`).then((response) => {
      let filteredGames = response.data.filter((game) => {
        let moonMatch = self.state.matchingPhases.find((phase) => {
          return game.date === phase.date
        })
        return self.state.opponent === game.opp && !!moonMatch
      })
      self.setState({
        matchingGames: filteredGames
      })
    })
  })
  }
  componentDidMount() {


    let chosenGame = this.props.schedule.find((game) => {
      return game.id == this.props.id && game.team_id == this.props.team_id
    })
    let team = this.props.teamOptions.find((team, i) => {
      return i + 1 == this.props.team_id
    })
    this.setState({
      date:chosenGame.date,
      teamid:this.props.team_id,
      id:this.props.id,
      chosenGame:chosenGame,
      opponent:chosenGame.opp,
      team:team,
      teamName:team.name
    })
  }
  render() {
    // let moonphase = this.state.matchingPhases[0].phase
    console.log(this.state.gamePhase)
    let winCounter = 0;
    let total = this.state.matchingGames.length
    this.state.matchingGames.forEach((game) => {
      if(game.wl === 'W'){
        winCounter += 1
      }
    })
    let moonIndex = this.state.gamePhase + 1
    let moonphase = this.state.phases[moonIndex]

    let percentage = Math.round(winCounter/total * 100)
    let result = `There is a ${percentage}% chance the ${this.state.teamName} will win!`
    return (
      <div>
        <h2>You have chosen the {this.state.teamName} vs. {this.state.opponent} on</h2>
        <h2>{this.state.date}</h2>
        <h3>This game will be played on a {moonphase} moon</h3>
        <p className='consult'> Click Button to Consult the Moon! </p>
        <button onClick={() => this.handleClick()}>Moon</button>
        <div>{result}</div>
      </div>
    )
  }
}

export default SelectedGame
