import React, { Component } from "react";

const withUser = (WrappedComponent) => {
  class UserWrapper extends Component {
    constructor(props) {
      super(props);

      this.state = {
        user: {
          name: "ABC",
          age: "44",
          address: "Google building",
        },
      };
    }

    render() {
      return <WrappedComponent user={this.state.user} {...this.props} />;
    }
  }

  return UserWrapper;
};

export default withUser;
