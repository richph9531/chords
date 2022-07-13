import React from 'react';

import Header from './components/Header';
import Footer from './components/Footer';
// import JobCard from './components/JobCard';
// import BlogCard from './components/BlogCard';
import BlogCards from './components/BlogCards';
import JobCard from './components/JobCard';

const App = () => (
    <div className='Wrapper'>
      <Header />
      <div className='Workspace'>
        <JobCard/>
        <br></br>
        {BlogCards}
        <br></br>
      </div>
      <Footer />
    </div>
);

export default App;
