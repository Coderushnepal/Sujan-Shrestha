import React, { Component } from "react";
import "./App.css";
import Counter from "./Counter";
import Clock from "./Clock";

const NAMES = ["A", "B"];

function withValidity(WrappedComponent) {
  class Valid extends Component {
    constructor(props) {
      super(props);

      this.state = {
        isValid: false,
      };
    }

    render() {
      return <WrappedComponent isValid={this.state.isValid} {...this.props} />;
    }
  }

  return Valid;
}

const ValidClock = withValidity(Clock);
const ValidCounter = withValidity(Counter);

function App() {
  return (
    <div className="App">
      <ValidClock />
      {NAMES.map((name) => (
        <ValidCounter key={name} name={name}>
          <h2>Test</h2>
        </ValidCounter>
      ))}
    </div>
  );
}

export default App;
