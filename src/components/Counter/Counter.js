import React, { Component } from "react";

import Loading from "../Loading";
import { withUser } from "../hoc";

const OddComponent = (props) => {
  return (
    <div>
      {props.user ? (
        <h4>I am enhanced odd {props.user.name}</h4>
      ) : (
        <h4>I am odd</h4>
      )}
    </div>
  );
};

const EvenComponent = () => (
  <div>
    <h4>I am even</h4>
  </div>
);

const EnhancedOddComponent = withUser(OddComponent);
const EnhancedEvenComponent = withUser(EvenComponent);

class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      isLoading: true,
      data: [],
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        isLoading: false,
        data: [{ name: "one" }, { name: "two" }, { name: "three" }],
      });
    }, 3000);
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
      <div className="counter">
        <h2>Count: {this.state.count}</h2>
        <h2>
          {this.state.count % 2 ? (
            <EnhancedOddComponent label="Oddddd" />
          ) : (
            <EnhancedEvenComponent />
          )}
        </h2>
        <button onClick={this.handleIncrement}>+</button>
        <button onClick={this.handleDecrement}>-</button>
        {this.state.isLoading ? (
          <Loading />
        ) : (
          <div>
            {this.state.data.map((item) => (
              <h3 key={item.name}>{item.name}</h3>
            ))}
          </div>
        )}
      </div>
    );
  }
}

export default Counter;
