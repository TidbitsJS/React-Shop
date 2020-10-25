import React, { Component } from "react";
import "./cart.css";
import { connect } from "react-redux";
import {
  INCREASE,
  DECREASE,
  TOGGLE_AMOUNT,
  removeItem,
} from "../actions/Action";

class CartItem extends Component {
  render() {
    const { cartImg, name, price, amount, remove, toggle } = this.props;
    return (
      <div className="cart-item">
        <img src={cartImg} alt={name} className="cart-img" />
        <div>
          <h4 style={{ fontSize: "1.1rem" }}>{name}</h4>
          <h4 style={{ fontSize: "0.8rem" }} className="item-price">
            ${price}
          </h4>
          <button className="remove-btn" onClick={() => remove()}>
            Remove
          </button>
        </div>
        <div>
          <button className="amount-btn" onClick={() => toggle("inc")}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
              <path d="M10.707 7.05L10 6.343 4.343 12l1.414 1.414L10 9.172l4.243 4.242L15.657 12z" />
            </svg>
          </button>
          <p className="amount">{amount}</p>
          <button
            className="amount-btn"
            onClick={() => {
              if (amount === 1) {
                return remove();
              } else {
                return toggle("dec");
              }
            }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
            </svg>
          </button>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  const { id, amount } = ownProps;

  return {
    remove: () => dispatch(removeItem(id)),
    increase: () =>
      dispatch({
        type: INCREASE,
        payload: { id },
      }),
    decrease: () =>
      dispatch({
        type: DECREASE,
        payload: { id, amount },
      }),
    toggle: (toggle) =>
      dispatch({
        type: TOGGLE_AMOUNT,
        payload: { id, toggle },
      }),
  };
};

export default connect(null, mapDispatchToProps)(CartItem);
