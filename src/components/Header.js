import React from 'react';
import PropTypes from 'prop-types';
import '../styles/Header.css';

const Header = props => (
    <div className='Header'>
      <h1>{props.title}</h1>
    </div>
);

Header.propTypes = {
  title: PropTypes.string,
};

export default Header;
