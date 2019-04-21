import React, { Component } from "react";
import { render } from "react-dom";
import styles from "./styles.module.css";

export default class Item extends Component {
  constructor(props) {
    super(props);
    this.mouseEnter = this.mouseEnter.bind(this);
    this.mouseLeave = this.mouseLeave.bind(this);
    this.toggleHoverState = this.toggleHoverState.bind(this);
    this.state = {
      style: {
        width: 0
      },
      visibility: {
        visibility: "visible"
      }
    };
  }

  mouseEnter() {
    this.toggleHoverState();
    const width = { width: 350 };
    const visibility = { visibility: "hidden" };
    this.setState({ width, visibility });
  }

  mouseLeave() {
    this.toggleHoverState();
    const width = { width: 0 };
    const visibility = { visibility: "visible" };
    this.setState({ width, visibility });
  }

  toggleHoverState() {
    let newHoverState = !this.state.isHovering;
    this.setState({
      isHovering: newHoverState
    });
  }

  render() {
    const {
      heading,
      image,
      genres,
      rating,
      description,
      stars,
      year,
      country
    } = this.props.item;
    const vis = {};
    return (
      <div
        className={styles.Item}
        onMouseEnter={this.mouseEnter}
        onMouseLeave={this.mouseLeave}
      >
        <div className={styles.Item}>
          <img src={image} alt="item" width="320px" />
          <p className={styles.ItemHeading} style={this.state.visibility}>
            {heading}
          </p>
          <p className={styles.ItemGenres} style={this.state.visibility}>
            {genres.join(", ")}
          </p>
        </div>

        <div className={styles.ItemOnHover} style={this.state.width}>
          <p className={styles.ItemRating}>{rating}</p>
          <p className={styles.ItemHeading}>{heading}</p>
          <p className={styles.ItemDescription}>{description}</p>
          <p className={styles.ItemStars}>{stars.join(", ")}</p>
          <p className={styles.ItemYearAndCountry}>{country + ", " + year}</p>
          <p className={styles.ItemGenres}>{genres.join(", ")}</p>
        </div>
      </div>
    );
  }
}
