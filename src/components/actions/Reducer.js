import {
  DECREASE,
  INCREASE,
  CLEAR_CART,
  REMOVE,
  GET_TOTALS,
  TOGGLE_AMOUNT,
  ADD_ITEM,
} from "./Action";

import { cartItem } from "./Items";

const initialStore = {
  cart: cartItem,
  total: 0,
  amount: 0,
};

const reducer = (state = initialStore, action) => {
  if (action.type === ADD_ITEM) {
    let payload = action.payload;
    console.log("state", payload, state.cart.length);
    payload.id = state.cart.length + 1;
    let tempcart = [...state.cart, payload];
    return { ...state, cart: tempcart };
  }

  if (action.type === CLEAR_CART) {
    return { ...state, cart: [] };
  }

  if (action.type === DECREASE) {
    let tempCart = state.cart.map((cartItem) => {
      if (cartItem.id === action.payload.id) {
        cartItem = { ...cartItem, amount: cartItem.amount - 1 };
      }
      return cartItem;
    });

    return { ...state, cart: tempCart };
  }

  if (action.type === INCREASE) {
    let tempCart = state.cart.map((cartItem) => {
      if (cartItem.id === action.payload.id) {
        cartItem = { ...cartItem, amount: cartItem.amount + 1 };
      }
      return cartItem;
    });

    return { ...state, cart: tempCart };
  }

  if (action.type === REMOVE) {
    return {
      ...state,
      cart: state.cart.filter((cartItem) => cartItem.id !== action.payload.id),
    };
  }

  if (action.type === GET_TOTALS) {
    let { total, amount } = state.cart.reduce(
      (cartTotal, cartItem) => {
        const { price, amount } = cartItem;
        const itemTotal = price * amount;

        cartTotal.total += itemTotal;
        cartTotal.amount += amount;

        return cartTotal;
      },
      {
        total: 0,
        amount: 0,
      }
    );

    total = parseFloat(total.toFixed(2));
    return { ...state, total, amount };
  }

  if (action.type === TOGGLE_AMOUNT) {
    return {
      ...state,
      cart: state.cart.map((cartItem) => {
        if (cartItem.id === action.payload.id) {
          if (action.payload.toggle === "inc") {
            return (cartItem = {
              ...cartItem,
              amount: cartItem.amount + 1,
            });
          }

          if (action.payload.toggle === "dec") {
            return (cartItem = {
              ...cartItem,
              amount: cartItem.amount - 1,
            });
          }
        }

        return cartItem;
      }),
    };
  }

  return state;
};

export default reducer;
