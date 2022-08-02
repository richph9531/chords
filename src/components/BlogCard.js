import React from 'react';
import PropTypes from 'prop-types';
import classes from '../styles/BlogCard.module.css';

const BlogCard = props => (
      <div className={classes.BlogCard}>
        <h3>{props.title}</h3>
        <p>{props.description}</p>
        <p>{props.id}</p>
        <p>Like count: <span className={classes.LikeCount}>{props.likeCount}</span></p>
        <button onClick={props.onLikeButtonClick}>Like</button>
      </div>
);
BlogCard.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  id: PropTypes.number,
  likeCount: PropTypes.number,
  onLikeButtonClick: PropTypes.number,
};

export default BlogCard;
