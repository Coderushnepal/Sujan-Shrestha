import React, { Component } from "react";

import Header from "../common/Header";
import Beer from "../main/beers/Beer";
import { dummyBeersData } from "../../constants/dummyData";

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
    let favorites = dummyBeersData;

    if (!!this.state.searchFor) {
      favorites = favorites.filter((beer) =>
        beer.name.toLowerCase().includes(this.state.searchFor.toLowerCase())
      );
    }

    return (
      <div className="wrapper">
        <Header setSearchText={this.setSearchText} />

        <main>
          <div className="container">
            {!!favorites.length &&
              favorites.map((beer) => <Beer key={beer.id} info={beer} />)}
          </div>
        </main>
      </div>
    );
  }
}

export default Favorites;
