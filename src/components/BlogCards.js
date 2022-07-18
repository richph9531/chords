import React from 'react';
import BlogCard from './BlogCard';

import blogEntriesArray from '../data/blogCardData.json';
import { isArrayEmpty } from '../helpers/Utils';

const BlogCards = isArrayEmpty(blogEntriesArray) ? [] : blogEntriesArray.map(item => (
    <BlogCard
      key={item.id}
      title={item.title}
      description={item.description}
      id={item.id}
    />
));

export default BlogCards;

