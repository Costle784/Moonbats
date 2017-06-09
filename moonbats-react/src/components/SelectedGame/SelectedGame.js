import React, { Component } from 'react'
import axios from 'axios'

class SelectedGame extends Component {
  constructor() {
    super()
    this.state = {
      phases:[],
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
    axios.get(`http://localhost:3000/moonphases?date=${this.state.date}`).then((response) => {
     this.setState({
       matchingPhases:this.response
     })
    axios.get(`http://localhost:3000/teams/${this.state.teamid}/pastgames`).then((response) => {
      response.filter((game) => {
        return this.state.opponent === game.opp && this.state.matchingPhases.map((phase) => {
          return game.date === phase.date
        })
      })
      this.setState({

        matchingGames:this.response
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
    // let matchingGames = this.state.matchingGames.map((game, i) => {
    //   <div key={i}>{}
    // })

    return (
      <div>
        <h2>You have chosen the {this.state.teamName} vs. {this.state.opponent} on</h2>
        <h2>{this.state.date}</h2>
        <p> Click Button to Consult the Moon! </p>
        <button onClick={() => this.handleClick()}>Moon</button>

      </div>
    )
  }
}

export default SelectedGame
