import React, { Component } from 'react';
import axios from 'axios'
import TeamPicker from '../TeamPicker/TeamPicker.js'
import Results from '../Results/Results.js'
import ScheduleContainer from '../ScheduleContainer/ScheduleContainer.js'
import SelectedTeamContainer from '../SelectedTeamContainer/SelectedTeamContainer.js'
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
    }
  }
  addSchedule(e) {
    e.preventDefault()
    let pathname = `http://localhost:3000/teams/${e.target.value}/futuregames`
    axios.get(pathname).then((response) => {
      this.setState({
        schedule: response.data
      })
    })
  }
  render() {
    return(
      <Router>
        <div>
          <header>
            <h1>Moonbats</h1>
            <nav>
              <Link to="/">Home</Link>
            </nav>
          </header>
          <main>
            <h3>Choose Your Team</h3>
            <Route exact path='/' render={() =>
              <div>
              <TeamPicker teamOptions={this.state.teamOptions} handleChange={(e) => this.addSchedule(e)}/>
              <ScheduleContainer schedule={this.state.schedule} />
            // <SelectedTeamContainer />

              </div>
            }/>
          </main>
        </div>
      </Router>
    )
  }
}

export default App;
