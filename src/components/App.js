import React, { Component } from "react";
import axios from "axios";

import Header from "./Header/Header";

import routes from "../routes";
import "./App.css";

class App extends Component {
  componentDidMount() {}
  render() {
    return (
      <div className="App">
        <Header />
        {routes}
      </div>
    );
  }
}

export default App;
