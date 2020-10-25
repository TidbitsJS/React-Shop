import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Header from "./container/Header/Header";
import About from "./container/About/About";
import Store from "./container/Store/Store";
import Service from "./container/Services/Service";
import Order from "./container/Order/Order";
import Footer from "./container/Footer/Footer";
import CartContainer from "./components/cartbox/CartContainer";

const App = () => {
  return (
    <Router>
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
            <CartContainer />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
