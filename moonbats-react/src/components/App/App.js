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
        {name: "Detroit Tigers"}
      ],
      selectedTeam: null,
      hasSchedule: false
    }
  }
   handleChange(e) {

   }
  //
  // }
  render() {
    return(
      <Router>
        <div>
          <h1>Moonbats!</h1>
          <nav>
            <Link to="/">Home</Link>
          </nav>
          <main>
            <h3>Choose Your Team</h3>
            <Route
              exact path='/'
              render={() => {
                return (
                  <div>
                    <TeamPicker
                      teamOptions={this.state.teamOptions}
                      handleChange={(e) => this.handleChange(e)}
                      />


                      <ScheduleContainer />
                      <SelectedTeamContainer />

                  </div>
                )
              }}
            />
          </main>
        </div>
      </Router>
    )
  }
}

export default App;
