import React, { Component } from "react";

import { Modal } from "../../common";

class BeerModal extends Component {
  render() {
    const { beer, handleClose, show } = this.props;
    const { description } = beer;

    return (
      <Modal show={show} handleClose={handleClose}>
        <div>
          <h2>{description}</h2>
        </div>
      </Modal>
    );
  }
}

export default BeerModal;
