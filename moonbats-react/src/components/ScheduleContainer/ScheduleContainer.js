import React, { Component } from 'react'
import { Link } from "react-router-dom"
import './ScheduleContainer.css'


class ScheduleContainer extends Component {
  componentDidMount() {
    this.props.clearSearch()
  }
  render() {
    let logo = this.props.selectedTeam.logo

    let schedule = this.props.schedule.map((game, i) => {
      let pathname = `/teams/${game.team_id}/games/${game.id}`
      return <div key={i} ><Link to={{pathname}}>{game.date} vs {game.opp}</Link></div>
    })
    return (
      <div>
        <div><img src={logo} alt='' className='logo'/></div>
        <div>{schedule}</div>
      </div>
    )
  }
}

export default ScheduleContainer
