import React, { Component } from 'react';
import axios from 'axios'
import TeamPicker from '../TeamPicker/TeamPicker.js'
import Results from '../Results/Results.js'
import ScheduleContainer from '../ScheduleContainer/ScheduleContainer.js'
import {
  BrowserRouter as Router,
  Route,
  Link,
  // Redirect
} from 'react-router-dom'
import './App.css'

class App extends Component {
  constructor() {
    super()
    this.state = {
      teamOptions: [
        {name: "Washington Nationals"},
        {name: "Philadelphia Phillies"},
        {name: "Miami Marlins"},
        {name: "New York Mets"},
        {name: "Atlanta Braves"}
      ],
      schedule: [],
      selectedTeam:[]
    }
  }
  addSchedule(e) {
    e.preventDefault()
    let logopath = `http://localhost:3000/teams/${e.target.value}`
    let futuregamespath = `http://localhost:3000/teams/${e.target.value}/futuregames`
    axios.get(futuregamespath).then((response) => {
      this.setState({
        schedule: response.data
      })
    })
    axios.get(logopath).then((response) => {
      this.setState({
        selectedTeam: response.data
      })
    })
  }
  render() {
    return(
      <Router>
        <div>
          <header>
            <h1 className='title'>Moonbats</h1>
            <nav>
              <Link to="/">Home</Link>
            </nav>
          </header>
          <main>
            <Route exact path='/' render={() =>
              <div>
              <TeamPicker selectedTeam={this.state.selectedTeam} teamOptions={this.state.teamOptions} handleChange={(e) => this.addSchedule(e)}/>
              <ScheduleContainer schedule={this.state.schedule} />


              </div>
            }/>
          </main>
        </div>
      </Router>
    )
  }
}

export default App;
