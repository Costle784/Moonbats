import React, { Component } from 'react';
import axios from 'axios'
import TeamPicker from '../TeamPicker/TeamPicker.js'
import Results from '../Results/Results.js'
import SelectedGame from '../SelectedGame/SelectedGame.js'
import ScheduleContainer from '../ScheduleContainer/ScheduleContainer.js'
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
        {name: "Washington Nationals"},
        {name: "Philadelphia Phillies"},
        {name: "Miami Marlins"},
        {name: "New York Mets"},
        {name: "Atlanta Braves"}
      ],
      schedule: [],
      selectedTeam:[],
      hasSearched:false
    }
  }
  addSchedule(e) {
    e.preventDefault()
    let logopath = `http://localhost:3000/teams/${e.target.value}`
    let futuregamespath = `http://localhost:3000/teams/${e.target.value}/futuregames`
    axios.get(futuregamespath).then((response) => {
      this.setState({
        schedule: response.data,
        hasSearched:true
      })
    })
    axios.get(logopath).then((response) => {
      this.setState({
        selectedTeam: response.data
      })
    })
  }

  clearSearch() {
    this.setState({
      hasSearched: false
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
            <Route exact path='/' render={() => {
              if(this.state.hasSearched) {
                  return <Redirect to='/games' />
                }
              return (
                <TeamPicker teamOptions={this.state.teamOptions} handleChange={(e) => this.addSchedule(e)} />
                )
              }
            }/>
            <Route path='/games' render={()=> <ScheduleContainer selectedTeam={this.state.selectedTeam} schedule={this.state.schedule} clearSearch={() => this.clearSearch()} />

            }/>
            <Route path='/results' render={() =>
              <Results />
            }/>
          </main>
        </div>
      </Router>
    )
  }
}

export default App;
