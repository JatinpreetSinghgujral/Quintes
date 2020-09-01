import React, { Component } from "react";
import StarRating from 'react-native-star-rating';

export default class RatingBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      starCount: props.count
    };
  }

  onStarRatingPress(rating) {
    this.setState({
      starCount: rating
    });
  }

  render() {
    return (
      <StarRating
        disabled={true}
        maxStars={5}
        rating={this.props.count}
        selectedStar={(rating) => this.onStarRatingPress(rating)}
        fullStarColor={this.props.fullStarColor || 'rgb(241,205,88)'}
        emptyStarColor={this.props.emptyStarColor || 'rgb(241,205,88)'}
        starSize={this.props.starSize || 18}
      />
    );
  }
}