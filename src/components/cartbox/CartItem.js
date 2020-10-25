import React, { Component } from "react";
import img from "../../imgCart/cake-2.jpeg";
import "./cart.css";

class CartItem extends Component {
  render() {
    return (
      <div className="cart-item">
        <img src={img} alt="cake" className="cart-img" />
        <div>
          <h4>Cake Item</h4>
          <h4 className="item-price">$12</h4>
          <button className="remove-btn" onClick={() => console.log("hello")}>
            Remove
          </button>
        </div>
        <div>
          <button className="amount-btn" onClick={() => console.log("inc")}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
              <path d="M10.707 7.05L10 6.343 4.343 12l1.414 1.414L10 9.172l4.243 4.242L15.657 12z" />
            </svg>
          </button>
          <p className="amount">2</p>
          <button className="amount-btn" onClick={() => console.log("Amount")}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
            </svg>
          </button>
        </div>
      </div>
    );
  }
}

export default CartItem;