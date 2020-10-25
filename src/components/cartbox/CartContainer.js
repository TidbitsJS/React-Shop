import React, { Component } from "react";
import CartItem from "./CartItem";

class CartContainer extends Component {
  render() {
    return (
      <section className="cart">
        <header>
          <h2>Your Bag</h2>
        </header>
        <article>
          <CartItem />
          <CartItem />
          <CartItem />
        </article>
        <footer>
          <hr />
          <div className="cart-total">
            <h4>
              Total <span>$24</span>
            </h4>
          </div>
          <button className="btns clear-btn">Empty</button>
        </footer>
      </section>
    );
  }
}

export default CartContainer;
