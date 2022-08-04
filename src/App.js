import React, { Component } from 'react';

import blogEntriesArray from './data/blogCardData.json';
import BlogCard from './components/BlogCard';
import isArrayEmpty from './helpers/Utils';

class App extends Component {
  state = {
    showBlogs: true,
    blogEntriesArray,
  };

  onLikeButtonClick = pos => {
    const updatedBlogList = this.state.blogEntriesArray;
    const updatedBlogObject = updatedBlogList[pos];
    updatedBlogObject.likeCount += 1;
    updatedBlogList[pos] = updatedBlogObject;
    this.setState({ blogEntriesArray: updatedBlogList });
  };

  onShowHideButtonClick = () => {
    this.setState(previousState => ({ showBlogs: !previousState.showBlogs }));
  };

  render() {
    // eslint-disable-next-line max-len
    const BlogCards = isArrayEmpty(this.state.blogEntriesArray) ? [] : this.state.blogEntriesArray.map((item, pos) => (
    <BlogCard
      key={item.id}
      title={item.title}
      description={item.description}
      id={item.id}
      likeCount={item.likeCount}
      onLikeButtonClick={() => this.onLikeButtonClick(pos)}
    />
    ));

    return (
    <div className='App'>
        <button onClick={this.onShowHideButtonClick}>
         { this.state.showBlogs ? 'Hide List' : 'Show List' }
        </button>
        { this.state.showBlogs ? BlogCards : null }
        <br></br>
    </div>
    );
  }
}

export default App;
