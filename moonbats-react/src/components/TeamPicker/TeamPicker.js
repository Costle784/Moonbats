import React, { Component } from 'react'
import './TeamPicker.css'

class TeamPicker extends Component {
  render() {

    let teamOptions = this.props.teamOptions.map((team, index) => {
      return(
        <option key={index + 1} value={index + 1}>{team.name}</option>
      )
    })
    teamOptions.unshift(
      <option key="0">select a team</option>
    )
    return (
      <select onChange={(e) => this.props.handleChange(e)}>
        {teamOptions}
      </select>
    )
  }
}
export default TeamPicker
