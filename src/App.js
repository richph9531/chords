import React from 'react';

import Header from './components/Header';
import Footer from './components/Footer';
import JobCard from './components/JobCard';
import BlogCard from './components/BlogCard';

function App() {
  return (
    <div className='Wrapper'>
      <Header />
      <div className='Workspace'>
        <JobCard />
        <BlogCard />
      </div>
      <Footer />
    </div>
  );
}

export default App;
