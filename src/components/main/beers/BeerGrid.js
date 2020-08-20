import React, { Component } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

import Beer from "./Beer";
import * as toast from "../../../utils/toast";
import { Header, Spinner, Counter } from "../../common";
import { fetchBeers } from "../../../services/beerService";
import { connect } from "react-redux";

class BeerGrid extends Component {
  constructor(props) {
    super(props);

    this.state = {
      beers: [],
      pageInfo: { page: 0, size: 25 },
      hasMore: true,
      searchFor: "",
      hasFilter: false,
    };
  }

  scrollParentRef = null;

  fetchBeers = async () => {
    try {
      const { beers, pageInfo, searchFor, hasFilter } = this.state;
      let { page, size } = pageInfo;

      if (hasFilter) {
        page = 0;
      }

      const data = await fetchBeers(page + 1, size, searchFor);

      this.setState({
        beers: hasFilter ? data : [...beers, ...data],
        pageInfo: {
          ...pageInfo,
          page: data.length ? page + 1 : page,
        },
        hasMore: !!data.length,
        hasFilter: false,
      });
    } catch (error) {
      const errorMsg = error.response.data.message;

      toast.error({ title: "On Snap!!", message: errorMsg });
    }
  };

  setSearchText = (searchText) => {
    this.setState(
      {
        searchFor: searchText,
        hasFilter: true,
      },
      () => this.fetchBeers()
    );
  };

  componentDidMount() {
    this.fetchBeers();
  }

  render() {
    const { error } = this.props;
    const { beers, hasMore } = this.state;

    return (
      <div>
        <Header setSearchText={this.setSearchText} />

        <main>
          <Counter />
          <div className="container" ref={(r) => (this.scrollParentRef = r)}>
            {!!error && (
              <div
                className="error"
                style={{
                  width: "100%",
                  padding: "10px",
                  backgroundColor: "#dd0000",
                  color: "white",
                }}
              >
                {error}
              </div>
            )}
            <InfiniteScroll
              dataLength={beers.length}
              next={this.fetchBeers}
              hasMore={hasMore}
              loader={<Spinner />}
            >
              {beers.map((beer) => (
                <Beer key={beer.id} info={beer} />
              ))}
            </InfiniteScroll>
          </div>
        </main>
      </div>
    );
  }
}

const mapStateToProps = ({ favoriteBeersReducer: { error } }) => {
  return {
    error,
  };
};

export default connect(mapStateToProps)(BeerGrid);
