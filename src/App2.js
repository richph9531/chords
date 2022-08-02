import React from 'react';

import Header from './components/Header';
import Footer from './components/Footer';
import BlogCards from './components/BlogCards';
import JobCard from './components/JobCard';

const headerText = 'This is a header...';

const App = () => (
    <div className='Wrapper'>
      <Header title={headerText}/>
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
