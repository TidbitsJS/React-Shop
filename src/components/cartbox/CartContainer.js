import React from "react";
import CartItem from "./CartItem";
import { connect } from "react-redux";
import { CLEAR_CART, GET_TOTALS } from "../actions/Action";

const CartContainer = ({ cart = [], total, dispatch }) => {
  React.useEffect(() => {
    dispatch({ type: GET_TOTALS });
  }, [cart, dispatch]);

  if (cart.length === 0) {
    return (
      <section className="cart">
        <header>
          <h2 style={{ color: "#ef7998", fontSize: "2.5rem" }}>Your Bag</h2>
          <h4 className="empty-cart">is currently Empty</h4>
        </header>
      </section>
    );
  }

  return (
    <section className="cart">
      <header>
        <h2 style={{ color: "#ef7998", fontSize: "2.5rem" }}>Your Bag</h2>
      </header>
      <article className="article-cart">
        {cart.map((item) => {
          return <CartItem key={item.id} {...item} />;
        })}
      </article>
      <footer>
        <hr style={{ border: "1px solid black" }} />
        <div className="cart-total">
          <h4
            style={{
              color: "#fff",
              fontSize: "1.8rem",
              backgroundColor: "rgba(0,0,0,0.4)",
              padding: "1rem",
              borderRadius: 5,
              fontWeight: "bolder",
            }}
          >
            Total <span style={{ color: "#fff" }}>${total}</span>
          </h4>
        </div>
        <button
          className="btns clear-btn"
          onClick={() => dispatch({ type: CLEAR_CART })}
        >
          Empty
        </button>
      </footer>
    </section>
  );
};

const mapStateToProps = (store) => {
  const { cart, total } = store;
  return { cart, total };
};

export default connect(mapStateToProps)(CartContainer);
