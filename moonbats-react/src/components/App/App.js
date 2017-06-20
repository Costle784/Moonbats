import React, { Component } from 'react';
import axios from 'axios'
import TeamPicker from '../TeamPicker/TeamPicker.js'
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
        {name: "Atlanta Braves"},
        {name: "New York Mets"},
        {name: "Miami Marlins"}
      ],
      schedule: [],
      selectedTeam:[],
      hasSearched:false,
    }
  }
  addSchedule(e) {
    e.preventDefault()
    console.log(e.target.value)
    let logopath = `https://moonbats.herokuapp.com/teams/${e.target.value}`
    let futuregamespath = `https://moonbats.herokuapp.com/teams/${e.target.value}/futuregames`
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
          <h1>hello</h1>
          <main>
            <Route exact path='/' render={() => {
              if(this.state.hasSearched) {
                let pathname = `/teams/${this.state.selectedTeam.id}/games`
                  return <Redirect to={pathname} />
                }
              return (
                <TeamPicker teamOptions={this.state.teamOptions} handleChange={(e) => this.addSchedule(e)} />
                )
              }
            }/>
            <Route exact path='/teams/:id/games' render={()=> <ScheduleContainer selectedTeam={this.state.selectedTeam} schedule={this.state.schedule} clearSearch={() => this.clearSearch()}/>

            }/>
            <Route path='/teams/:team_id/games/:id' render={(props) => {
              return(
                <SelectedGame {...props.match.params} schedule={this.state.schedule} teamOptions={this.state.teamOptions} />
              )
            }}/>
          </main>
        </div>
      </Router>
    )
  }
}

export default App;
