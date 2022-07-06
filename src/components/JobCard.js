function JobCard() {
  const firstName = 'Richard';
  const lastName = 'Philips';
  const age = '41';
  const job = 'QA engineer';

  const getFullName = (firstName, lastName) => {
    const fullName = firstName + ' ' + lastName
    return fullName
  }
    return (
      <div className='job-card'>
        <p>Full name: {getFullName(firstName, lastName)}</p>
        <p>Age: {age}</p>
        <p>Job: {job}</p>
      </div>
    );
  }
  
export default JobCard;