import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Layout } from "./components";
import ControlledCarousel from "./components/ControlledCarousel";
import TryForFreeBtn from "./components/TryForFreeBtn";

// classed based component, extends Component class
class App extends Component {
  // ono sta se vidi u browseru
  render() {
    return (
      <Layout>
        <ControlledCarousel />
        <br />
        <h2 align="center">
          <font color="white">The best series online</font>
        </h2>
        <TryForFreeBtn />
      </Layout>
    );
  }
}

export default App;
