import Header from './components/Header'
import Footer from './components/Footer'
import JobCard from './components/JobCard'

function App() {
  return (
    <div className='wrapper'>
      <Header />
      <div className='workspace'>
        <JobCard />
      </div>
      <Footer />
    </div>
  );
}

export default App;
