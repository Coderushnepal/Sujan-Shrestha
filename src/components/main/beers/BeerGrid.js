import React, { Component } from "react";

import Beer from "./Beer";
import * as toast from "../../../utils/toast";
import { Header, Spinner } from "../../common";
import { fetchBeers } from "../../../services/beerService";

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
    try {
      const data = await fetchBeers();

      this.setState({
        beers: data,
        isLoading: false,
      });
    } catch (error) {
      const errorMsg = error.response.data.message;

      toast.error({ title: "On Snap!!", message: errorMsg });
    }
  };

  componentDidMount() {
    this.fetchBeers();
  }

  render() {
    const { isLoading, beers } = this.state;

    return (
      <div>
        <Header />

        {isLoading ? (
          <Spinner />
        ) : (
          <main>
            <div className="container" ref={(r) => (this.scrollParentRef = r)}>
              {beers.map((beer) => (
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
