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
      <option key="0">Team Select</option>
    )
    return (
      <div>
        <h1>hello</h1>
        <select onChange={(e) => this.props.handleChange(e)}>
          {teamOptions}
        </select>
      </div>
    )
  }
}
export default TeamPicker
