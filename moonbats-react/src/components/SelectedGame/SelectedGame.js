import React, { Component } from 'react'
import axios from 'axios'

class SelectedGame extends Component {
  constructor() {
    super()
    this.state = {
      phases:[]
    }
  }
  handleClick() {
    axios.get('http://localhost:3000/moonphases').then((response) => {
     this.setState({
       phases:response.data
      })
    })
  }

  render() {
    let moonphase = this.state.phases.find((phase) => {
      return phase.date ===   
    })
    let teamid = this.props.team_id
    let id = this.props.id
    let chosenGame = this.props.schedule.find((game) => {
      return game.id == id && game.team_id == teamid
    })
    let opponent = chosenGame.opp
    let team = this.props.teamOptions.find((team, i) => {
      return i + 1 == teamid
    })
    let teamName = team.name
    let date = chosenGame.date


    return (
      <div>
        <h2>You have chosen the {teamName} vs. {opponent} on</h2>
        <h2>{date}</h2>
        <p> Click Button to Consult the Moon! </p>
        <button onClick={() => this.handleClick()}>Moon</button>
      </div>
    )
  }
}

export default SelectedGame
