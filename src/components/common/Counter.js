import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { counterActions } from "../../actions";

class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: this.props.count,
    };
  }

  handleIncrease = () => {
    this.setState(
      {
        count: this.props.count + 1,
      },
      () => {
        this.props.increaseCount();
      }
    );
  };

  handleDecrease = () => {
    this.setState(
      {
        count: this.props.count - 1,
      },
      () => {
        this.props.decreaseCount();
      }
    );
  };

  handleModify = () => {
    const newValue = Math.floor(Math.random() * 10);
    this.setState(
      {
        count: newValue,
      },
      () => {
        this.props.modifyCount(newValue);
      }
    );
  };

  render() {
    const { count } = this.state;

    return (
      <div>
        <p>
          <span onClick={this.handleModify}>Counter {count}</span>
          <button
            style={{
              position: "relative",
              clear: "both",
              padding: "10px",
              margin: "10px",
            }}
            onClick={this.handleIncrease}
          >
            +
          </button>
          <button
            style={{
              position: "relative",
              clear: "both",
              padding: "10px",
              margin: "10px",
            }}
            onClick={this.handleDecrease}
          >
            -
          </button>
        </p>
      </div>
    );
  }
}

const mapStateToProps = ({ counterReducer }) => {
  return {
    count: counterReducer.count,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    /** most efficient way */
    ...bindActionCreators({ ...counterActions }, dispatch),

    /** map to an object first */
    // actions: bindActionCreators({ ...counterActions }, dispatch),

    // actions: {
    //   increaseCount: () => {},
    //   decreaseCount: () => {},
    //   modifyCount: (value) => {},
    // },

    // ...bindActionCreators({ ...counterActions }, dispatch)

    /** bind using individual action creators */
    // increaseCount: bindActionCreators(counterActions.increaseCount, dispatch),
    // decreaseCount: bindActionCreators(counterActions.decreaseCount, dispatch),
    // modifyCount: bindActionCreators(counterActions.modifyCount, dispatch),

    /** manually call dispatch */
    // increaseCount: dispatch(() => counterAction.increaseCount())
    // decreaseCount: dispatch(() => counterAction.decreaseCount())
    // modifyCount: dispatch((value) => counterAction.modifyCount(value))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
