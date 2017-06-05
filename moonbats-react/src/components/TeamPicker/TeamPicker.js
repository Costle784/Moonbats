import React, { Component } from 'react'
import axios from 'axios'
import './TeamPicker.css'

class TeamPicker extends Component {
  render() {
    let teamOptions = this.props.teamOptions.map((team, index) => {
      return(
        <option key={index + 1} value={teamOptions.team}>{teamOptions.team}</option>
      )
    })
    teamOptions.unshift(
      <option key="0">Team Select</option>
    )
    return (
      <select>
        {teamOptions}
      </select>
    )
  }
}




export default TeamPicker
