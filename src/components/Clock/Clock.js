import React, { Component } from "react";

class Clock extends Component {
  timer;

  constructor(props) {
    super(props);

    this.state = {
      time: new Date().toLocaleTimeString(),
    };
  }

  updateTime = () => {
    this.setState({
      time: new Date().toLocaleTimeString(),
    });
  };

  componentDidMount() {
    this.timer = setInterval(() => {
      this.updateTime();
    }, 1000);
  }

  shouldComponentUpdate() {
    if (this.state.time.split(" ")[0].split(":")[2] % 2) {
      return true;
    }
    return false;
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    return <h2>{this.state.time}</h2>;
  }
}

export default Clock;
