import React, { Component } from 'react';
import axios from 'axios'
import TeamPicker from '../TeamPicker/TeamPicker.js'
import Results from '../Results/Results.js'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect
} from 'react-router-dom'
import './App.css'

class App extends Component {
  constructor() {
    super()
    this.state = {
      teamOptions: [
        {team: "Washington Nationals",
        team: "Detroit Tigers"
      }],
      selectedTeam: null
    }
  }
  // this.viewSchedule(e) {
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
                  <TeamPicker />
                    // viewSchedule={(e) => this.viewSchedule }

                  // <scheduleContainer />
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
