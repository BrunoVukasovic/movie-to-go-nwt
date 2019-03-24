import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Layout } from "./components";

// classed based component, extends Component class
class App extends Component {
  // ono sta se vidi u browseru
  render() {
    return <Layout>main</Layout>;
  }
}

export default App;
