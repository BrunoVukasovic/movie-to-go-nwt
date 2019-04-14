import React, { Component } from "react";
import styles from "./styles.module.css";
import Item from "../Item";
import imageGot from "../../images/got-1920.jpg";
import imageBb from "../../images/bb-1920.jpg";

export default class ItemsGrid extends Component {
  constructor() {
    super();
    this.state = {
      items: [
        {
          id: 1,
          heading: "Game of thrones",
          image: imageGot,
          rating: 5,
          genres: ["action", "adveture", "drama", "fantasy"],
          year: 2011,
          country: "USA",
          description:
            "Nine noble families fight for control over the mythical lands of Westeros, while an ancient enemy returns after being dormant for thousands of years.",
          stars: ["Emilia Clarke", "Peter Dinklage", "Kit Harington"]
        },
        {
          id: 2,
          heading: "Breaking bad",
          image: imageBb,
          rating: 5,
          genres: ["crime", "drama", "thriller"],
          year: 2008,
          country: "USA",
          description:
            "A high school chemistry teacher diagnosed with inoperable lung cancer turns to manufacturing and selling methamphetamine in order to secure his family's future.",
          stars: ["Bryan Cranston", "Aaron Paul", "Anna Gunn"]
        }
      ]
    };
  }
  render() {
    const { items } = this.state;
    return (
      <div>
        {items.map(item => (
          <Item key={item.id} item={item} />
        ))}
      </div>
    );
  }
}
