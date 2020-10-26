import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

import { createStore } from "redux";
import reducer from "./components/actions/Reducer";
import { Provider } from "react-redux";

import Header from "./container/Header/Header";
import About from "./container/About/About";
import Store from "./container/Store/Store";
import Service from "./container/Services/Service";
import Order from "./container/Order/Order";
import Footer from "./container/Footer/Footer";
import CartContainer from "./components/cartbox/CartContainer";

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const App = () => {
  return (
    <Router>
      <Provider store={store}>
        <div className="App">
          <Switch>
            <Route exact path="/">
              <Header />
              <About />
              <Store />
              <Service />
              <Order />
              <Footer />
            </Route>
            <Route exact path="/cart">
              <section className="cart-page">
                <CartContainer />
              </section>
            </Route>
          </Switch>
        </div>
      </Provider>
    </Router>
  );
};

export default App;
