import React from 'react';

import Header from './components/Header';
import Footer from './components/Footer';
import JobCard from './components/JobCard';
import BlogCard from './components/BlogCard';
import DynamicBlogCards from './components/DynamicBlogCards';

const App = () => (
    <div className='Wrapper'>
      <Header />
      <div className='Workspace'>
        <JobCard />
        <br></br><br></br><br></br><br></br><br></br>
        <DynamicBlogCards />
        <br></br><br></br><br></br><br></br><br></br>
        <BlogCard />
      </div>
      <Footer />
    </div>
);

export default App;
