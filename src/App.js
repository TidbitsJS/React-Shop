import React from "react";
import "./App.css";
import Header from "./container/Header/Header";
import About from "./container/About/About";
import Store from "./container/Store/Store";
import Service from "./container/Services/Service";
import Order from "./container/Order/Order";

const App = () => {
  return (
    <div className="App">
      <Header />
      <About />
      <Store />
      <Service />
      <Order />
    </div>
  );
};

export default App;
