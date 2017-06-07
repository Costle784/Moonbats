import React, { Component } from 'react'
import { Link } from "react-router-dom"
import './ScheduleContainer.css'


class ScheduleContainer extends Component {
    constructor(props) {
      super(props)
    }
  render() {
    let schedule = this.props.schedule.map((game, i) => {

      return <p key={i}> {game.date} vs {game.opp} </p>


    })

    console.log(this.props.schedule)

    return (
      <div>{schedule}</div>
    )
  }
}

export default ScheduleContainer
