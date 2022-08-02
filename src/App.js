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

  BlogCards = isArrayEmpty(blogEntriesArray) ? [] : blogEntriesArray.map(item => (
    <BlogCard
      key={item.id}
      title={item.title
      }
      description={item.description}
      id={item.id}
    />
  ));

  doSomethingOnClick = () => {
    this.setState(previousState => ({ showBlogs: !previousState.showBlogs }));
  };

  render() {
    console.log('render method called');
    return (
    <div className='App'>
        <button onClick={this.doSomethingOnClick}>
         { this.state.showBlogs ? 'Hide List' : 'Show List' }
        </button>
        { this.state.showBlogs ? this.BlogCards : null }
        <br></br>
    </div>
    );
  }
}

export default App;
