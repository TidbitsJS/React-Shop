import React from "react";
import "./App.css";
import Header from "./container/Header/Header";
import About from "./container/About/About";
import Store from "./container/Store/Store";

const App = () => {
  return (
    <div className="App">
      <Header />
      <About />
      <Store />
    </div>
  );
};

export default App;
