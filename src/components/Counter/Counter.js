import React, { Component } from "react";
import { isVowel } from "../../utils/strings";

import "./counter.css";

class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  componentDidMount() {
    console.log("componentDidMount");
  }

  componentDidUpdate() {
    console.log("componentDidUpdate");
  }

  handleIncrement = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  handleDecrement = () => {
    this.setState({
      count: this.state.count - 1,
    });
  };

  render() {
    return (
      <div>
        <h1>Counter: {this.state.count}</h1>
        {this.props.children}
        <p className={isVowel(this.props.name[0]) ? "red" : "green"}>
          {this.props.name}
        </p>
        <button
          className="plus"
          onClick={
            this.props.handleIncrement
              ? this.props.handleIncrement
              : this.handleIncrement
          }
        >
          +
        </button>
        <button className="minus" onClick={this.handleDecrement}>
          -
        </button>
      </div>
    );
  }
}

export default Counter;
