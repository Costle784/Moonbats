import React, { Component } from 'react';
import axios from 'axios'
import SearchContainer from '../TeamPicker/TeamPicker.js'
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
        {team: "Washington Nationals"}
      ]
    }
  }
  render(){
    return(
      <Router>
        <div>
          <h1>Moonbats!</h1>
          <nav>
            <Link to="/">Home</Link>
          </nav>    
          <main>
            <Route
              exact path='/'
              render={() => {
                return (
                  <Dashboard stocks={this.state.stocks} />
                )
              }}
            />
    )
  }


}






export default App;
