import React, { Component } from "react";
import styles from "./styles.module.css";

export default class Item extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { heading, rating } = this.props.item;
    return (
      <div className={styles.Item}>
        <h2>{heading}</h2>
        <p>{rating}</p>
      </div>
    );
  }
}
