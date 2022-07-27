import React from 'react';
import BlogCard from '../components/BlogCard';

export default {
  title: 'Components/Blogcard',
  component: BlogCard,
};

const Template = args => <BlogCard {...args} />;

export const Standard = Template.bind({});
Standard.args = {
  title: 'Standard title',
  description: 'Standard description',
  id: 1,
};

export const LongDescription = Template.bind({});
LongDescription.args = {
  title: 'Long description title',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec hendrerit pulvinar rhoncus. Nam non facilisis turpis. Sed vel est at nunc dapibus vehicula nec nec nisl. Sed sollicitudin viverra nunc, ut molestie dolor commodo sit amet. Proin rhoncus pretium felis, vitae pellentesque nibh lacinia vitae. Nam interdum erat id ultrices tincidunt. Morbi vitae ornare quam. In lacinia ligula sit amet vehicula maximus. Vivamus eget ligula fringilla est rutrum maximus. Etiam cursus porttitor velit, nec varius velit cursus non. Etiam semper neque a finibus porttitor. Proin sed rhoncus tortor, quis posuere mauris. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce lobortis id mauris eget blandit. In id nunc ut velit ultrices scelerisque non eu quam. Nulla bibendum laoreet dignissim.',
  id: 1234567890,
};
