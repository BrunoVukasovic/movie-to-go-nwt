import React, { Component } from "react";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons/faStar";
import { faStar as farStar } from "@fortawesome/free-regular-svg-icons/faStar";

export default class Rating extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let renderFullStars = () => {
      library.add(faStar);
      const fullStars = this.props.rating;
      return fullStars !== 0
        ? Array(fullStars)
            .fill(null)
            .map(i => {
              return <FontAwesomeIcon key={Math.random()} icon="star" />;
            })
        : "";
    };

    let renderEmptyStart = () => {
      library.add(farStar);
      const emptyStars = 5 - this.props.rating;
      return emptyStars !== 0
        ? Array(emptyStars)
            .fill(null)
            .map(i => {
              return (
                <FontAwesomeIcon key={Math.random()} icon={["far", "star"]} />
              );
            })
        : "";
    };

    return (
      <div>
        {renderFullStars()} {renderEmptyStart()}
      </div>
    );
  }
}
