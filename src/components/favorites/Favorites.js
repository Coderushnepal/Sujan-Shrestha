import React, { Component } from "react";
import { connect } from "react-redux";

import Header from "../common/Header";
import Beer from "../main/beers/Beer";

class Favorites extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchFor: "",
    };
  }

  setSearchText = (searchText) => {
    this.setState({
      searchFor: searchText,
    });
  };

  render() {
    let { favoriteBeers } = this.props;

    if (!!this.state.searchFor) {
      favoriteBeers = favoriteBeers.filter((beer) =>
        beer.name.toLowerCase().includes(this.state.searchFor.toLowerCase())
      );
    }

    return (
      <div className="wrapper">
        <Header setSearchText={this.setSearchText} />

        <main>
          <div className="container">
            {!!favoriteBeers.length &&
              favoriteBeers.map((beer) => <Beer key={beer.id} info={beer} />)}
          </div>
        </main>
      </div>
    );
  }
}

const mapStateToProps = ({ favoriteBeersReducer }) => {
  return { favoriteBeers: favoriteBeersReducer.favoriteBeers };
};

export default connect(mapStateToProps)(Favorites);
