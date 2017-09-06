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
              <Link to="/Moonbats/" className='home'>Home</Link>
            </nav>

          </header>
          <main>
            <Route exact path='/Moonbats/' render={() => {
              if(this.state.hasSearched) {
                let pathname = `/teams/${this.state.selectedTeam.id}/games`
                  return <Redirect to={pathname} />
                }
              return (
                <div>
                  <p><TeamPicker teamOptions={this.state.teamOptions}  /></p>
                  <p><img src='https://media.giphy.com/media/aN9GqoR7OD3nq/giphy.gif'></img></p>
                  <img className='bats' src='http://www.pngmart.com/files/1/Baseball-Bat-Transparent-PNG.png'></img>
                </div>
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
