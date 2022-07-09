import React from 'react';
import '../App.css';

const blogEntry = {
  title: 'Blog ',
  description: 'Some text to test the handling of the paragraph. Some text to test the handling of the paragraph. Some text to test the handling of the paragraph. Some text to test the handling of the paragraph. Some text to test the handling of the paragraph.',
};

function BlogCardsFunction() {
  return (
    <div className='BlogCards'>
      <div className='BlogCard'>
        <h3>{ blogEntry.title }1</h3>
        <p>{ blogEntry.description }</p>
      </div>
      <div className='BlogCard'>
        <h3>{ blogEntry.title }2</h3>
        <p>{ blogEntry.description }</p>
      </div>
      <div className='BlogCard'>
        <h3>{ blogEntry.title }3</h3>
        <p>{ blogEntry.description }</p>
      </div>
    </div>
  );
}

export default BlogCardsFunction;

/*
<div data-tag='div-data-tag' another-tag='another-div-tag'>
  <h1 data-tag='h1-data-tag' another-tag='another-h1-tag'>
  Heading
  </h1>
  <p data-tag='p-data-tag' another-tag='another-p-tag'>
  Paragraph
  </p>
</div>
*/
