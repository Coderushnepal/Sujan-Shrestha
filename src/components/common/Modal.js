import React from "react";
import PropTypes from "prop-types";

const Modal = ({ show, handleClose, children }) => (
  <div className={`modal ${show ? "display-block" : "display-none"}`}>
    <section className="modal-main">
      <button className="btn" onClick={handleClose}>
        <i className="fa fa-times" />
      </button>
      {children}
    </section>
  </div>
);

Modal.propTypes = {
  show: PropTypes.bool,
  handleClose: PropTypes.func,
  children: PropTypes.object,
};

export default Modal;
