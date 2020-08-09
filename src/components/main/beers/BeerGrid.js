import React, { Component } from "react";

import Beer from "./Beer";
import { Header, Spinner } from "../../common";
import { dummyBeersData } from "../../../constants/dummyData";

class BeerGrid extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      beers: [],
    };
  }

  scrollParentRef = null;

  fetchBeers = async () => {
    setTimeout(() => {
      this.setState({
        beers: dummyBeersData,
        isLoading: false,
      });
    }, 3000);
  };

  componentDidMount() {
    this.fetchBeers();
  }

  render() {
    const { isLoading } = this.state;

    return (
      <div>
        <Header />

        {isLoading ? (
          <Spinner />
        ) : (
          <main>
            <div className="container" ref={(r) => (this.scrollParentRef = r)}>
              {this.state.beers.map((beer) => (
                <Beer key={beer.id} info={beer} />
              ))}
            </div>
          </main>
        )}
      </div>
    );
  }
}

export default BeerGrid;
