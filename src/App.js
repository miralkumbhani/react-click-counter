import React, { Component } from "react";
import "./App.css";
import { Button } from "react-bootstrap";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
    };
  }

  render() {
    return (
      <div className="App text-center" data-test="component-app">
        <h1 data-test="counter-display">
          The value of the counter display is {this.state.counter}
        </h1>
        <div className="counter-buttons">
          <Button variant="primary"
            data-test="counter-increment-button"
            onClick={() => this.setState({ counter: this.state.counter + 1 })}
          >
            Increment count
          </Button>
        </div>
      </div>
    );
  }
}

export default App;
