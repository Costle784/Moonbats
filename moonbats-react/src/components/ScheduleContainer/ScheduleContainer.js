import React, { Component } from 'react'
import './ScheduleContainer.css'


class ScheduleContainer extends Component {
    constructor() {
      super()
      this.state = {
    }
  }
  render() {
    const schedule = [];

    return (
      <div>
        <h3>Pick a game</h3>
        <div id='schedulecontainer'>Schedule goes here</div>
      </div>
    )
  }
}

export default ScheduleContainer
