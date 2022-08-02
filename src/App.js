import React, { Component } from 'react';

import blogEntriesArray from './data/blogCardData.json';
import BlogCard from './components/BlogCard';

function isArrayEmpty(array) {
  if (array !== undefined && array !== null && array.length > 0) {
    return false;
  } return true;
}

class App extends Component {
  state = { showBlogs: true };

  // eslint-disable-next-line class-methods-use-this
  onLikeButtonClick = () => {
    alert('ALERT');
  };

  onShowHideButtonClick = () => {
    this.setState(previousState => ({ showBlogs: !previousState.showBlogs }));
  };

  BlogCards = isArrayEmpty(blogEntriesArray) ? [] : blogEntriesArray.map(item => (
    <BlogCard
      key={item.id}
      title={item.title}
      description={item.description}
      id={item.id}
      likeCount={item.likeCount}
      onLikeButtonClick={this.onLikeButtonClick}
    />
  ));

  render() {
    console.log('render method called');
    return (
    <div className='App'>
        <button onClick={this.onShowHideButtonClick}>
         { this.state.showBlogs ? 'Hide List' : 'Show List' }
        </button>
        { this.state.showBlogs ? this.BlogCards : null }
        <br></br>
    </div>
    );
  }
}

export default App;
