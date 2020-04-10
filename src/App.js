import React, { Component } from "react"
// import logo from "./logo.svg"
import "./App.css"

// Parent Component
class App extends Component {
  state = {
    toggle: true
  }

  toggle = () => {
    this.setState({
      toggle: !this.state.toggle
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          {/* Child Component */}
          <Welcome text="Welcome to Using Props" item="Another Example" />

          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          {this.props.text}
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          {/* <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a> */}
        </header>

        {this.state.toggle && <p>This should show and hide</p>}
        <button onClick={this.toggle}>Show / Hide</button>
      </div>
    )
  }
}

// Child Component
class Welcome extends Component {
  render() {
    const { text } = this.props

    return (
      <div>
        <h3 className="App-title">{text}</h3>
      </div>
    )
  }
}

export default App
