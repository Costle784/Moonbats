import React, { Component } from 'react'

class SelectedGame extends Component {
  render() {
    let teamid = this.props.team_id
    let id = this.props.id
    let chosenGame = this.props.schedule.find((game) => {
      return `${game.id} === id && ${game.team_id} === teamid`
    })
    console.log(chosenGame.id)

    return (
      <div></div>
    )
  }
}

export default SelectedGame
