import React from 'react';
import '../App.css';

const blogEntriesArray = [
  {
    id: 1,
    title: 'Blog 1',
    description: 'Blog 1 description field for the blogEntry that we\'re loading dynamically',
  },
  {
    id: 2,
    title: 'Blog 2',
    description: 'Blog 2 description field for the blogEntry that we\'re loading dynamically',
  },
  {
    id: 3,
    title: 'Blog 3',
    description: 'Blog 3 description field for the blogEntry that we\'re loading dynamically',
  },
];

const cardDataFromArray = blogEntriesArray.map(item => {
  const abc = <div className='BlogCard' key={item.id}>
  <h3>{item.title}</h3>
  <p>{item.description}</p>
</div>;
  return abc;
});

const DynamicBlogCards = () => (
    <div className='BlogCards'>
      {cardDataFromArray}
    </div>
);

export default DynamicBlogCards;

