import React, { Component } from "react";
import styles from "./styles.module.css";

export default class Item extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { heading, image, genres } = this.props.item;
    return (
      <div className={styles.Item}>
        <img src={image} alt="item" width="320px" />
        <p className={styles.itemHeading}>{heading}</p>
        <p className={styles.itemGenres}>{genres.join(", ")}</p>
      </div>
    );
  }
}
