import React, { Component } from 'react'
import axios from 'axios'

class Results extends Component {
  constructor(props) {
    super(props)
    this.state = {
      moondata: this.props.moondata
    }
  }
  render() {
    return (
      <div>
        <h3>Translation: </h3>
        <p>{this.state.translation}</p>
    )
  }



}
