import React, { Component } from 'react'
import './TeamPicker.css'

class TeamPicker extends Component {
  render() {
    let teamOptions = this.props.teamOptions.map((team, index) => {
      return(
        <option key={index + 1} value={team.name}>{team.name}</option>
      )
    })
    teamOptions.unshift(
      <option key="0">Team Select</option>
    )
    return (
      <select onChange={(e) => this.props.handleChange(e)}>
        {teamOptions}
      </select>
    )
  }
}




export default TeamPicker
