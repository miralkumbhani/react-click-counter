import React, { Component } from "react";
import "./App.css";
import { Button, Alert } from "react-bootstrap";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
      error: false,
    };
  }

  render() {
    return (
      <div className="App" data-test="component-app">
        <h1 data-test="counter-display">
          The value of the counter display is {this.state.counter}
        </h1>
        <div className="counter-buttons">
          <Button
            variant="secondary"
            data-test="counter-decrement-button"
            onClick={() =>
              this.state.counter > 0
                ? this.setState({ counter: this.state.counter - 1 })
                : this.setState({ counter: 0, error: true })
            }
          >
            Decrement count
          </Button>
          <Button
            variant="primary"
            data-test="counter-increment-button"
            onClick={() => this.setState({ counter: this.state.counter + 1 })}
          >
            Increment count
          </Button>
        </div>
        {this.state.error && (
          <div className="counter-error-block">
            <Alert
              data-test="counter-error"
              variant="danger"
              dismissible
              onClose={() => this.setState({ error: false })}
            >
              Counter cannot decrease less than 0
            </Alert>
          </div>
        )}
      </div>
    );
  }
}

export default App;
