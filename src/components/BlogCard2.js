import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classes from '../styles/BlogCard.module.css';

class BlogCard extends Component {
  state = {
    likeCount: 0,
  };

  onLikeButtonClick = () => {
    this.setState(previousState => ({ likeCount: previousState.likeCount + 1 }));
  };

  render() {
    return (
      <div className={classes.BlogCard}>
        <h3>{this.props.title}</h3>
        <p>{this.props.description}</p>
        <p>{this.props.id}</p>
        <p>Like count: <span className={classes.LikeCount}>{this.state.likeCount}</span></p>
        <button onClick={this.onLikeButtonClick}>Like</button>
      </div>
    );
  }
}

BlogCard.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  id: PropTypes.number,
};

export default BlogCard;
