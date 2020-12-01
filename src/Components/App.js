import "./App.css"
import React, { Component } from 'react';
import Statistics from "./Statistics/Statistics";

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }
  setValue = (e) => {
    this.setState((prev) => ({
      [e.target.name]: prev[e.target.name] + 1
    }))
  }
  render() {
    return (
      <>
        <Statistics
          good={this.state.good}
          neutral={this.state.neutral}
          bad={this.state.bad}
          setValue={this.setValue}
        />
      </>
    );
  }
}

export default App;