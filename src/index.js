import React from "react";
import ReactDOM from "react-dom"; // rendering main app component (App)
import App from "./App";
import * as serviceWorker from "./serviceWorker";

// prima ono sta ce renderat (<App />) i di ce to renderat
ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
