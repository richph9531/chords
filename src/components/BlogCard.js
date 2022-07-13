import React from 'react';
import PropTypes from 'prop-types';
import '../styles/BlogCard.css';

const BlogCard = props => (
  <div className='BlogCard'>
    <h3>{props.title}</h3>
    <p>{props.description}</p>
    <p>{props.id}</p>
  </div>
);

BlogCard.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  id: PropTypes.number,
};

export default BlogCard;
