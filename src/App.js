import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Layout } from "./components";
import ControlledCarousel from "./components/ControlledCarousel";
import TryForFreeBtn from "./components/TryForFreeBtn";
import ItemsGrid from "./components/ItemsGrid";

// classed based component, extends Component class
class App extends Component {
  // ono sta se vidi u browseru
  render() {
    return (
      <Layout>
        <ControlledCarousel />
        <br />
        <h2 align="center">
          <font>The best series online</font>
        </h2>
        <TryForFreeBtn />
        <ItemsGrid />
      </Layout>
    );
  }
}

export default App;
