import React, { Component } from 'react'
import './App.css'

class App extends Component {
  constructor() {
    super()

    this.state = {
      string: 'Hello Christian',
    }
  }
  render() {
    return (
      <div className="App">
        <h1>{this.state.string}</h1>
        <button onClick={() => this.setState({ string: 'Good morning Shriscrea8' })}>CHange text</button>
      </div>
    )
  }
}

export default App
