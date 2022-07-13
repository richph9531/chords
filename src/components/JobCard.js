import React from 'react';
import '../styles/JobCard.css';

const arrayOfJobTitles = ['QA engineer', 'Developer', 'Designer', 'Product owner'];
const randomJob = arrayOfJobTitles[Math.floor(Math.random() * arrayOfJobTitles.length)];

const firstName = 'Richard';
const lastName = 'Philips';
const age = '41';

const jobCardObject = {
  name: {
    firstName,
    lastName,
  },
  age,
  randomJob,
};

const JobCard = () => {
  const inputPlaceholder = 'Enter data';
  const inputDetailsTextBox = <input placeholder={ inputPlaceholder }/>;

  const getFullName = (firstNameField, lastNameField) => `${firstNameField} ${lastNameField}`;
  return (
  <div className='JobCard'>
    <p>Full name: { getFullName(jobCardObject.name.firstName, jobCardObject.name.lastName)}</p>
    <p>Age: { jobCardObject.age }</p>
    <p>Job: { jobCardObject.job }</p>
    { inputDetailsTextBox }
    { arrayOfJobTitles[2] }
    {
      randomJob === 'Developer' ? 'Developer' : 'Other'
    }
  </div>
  );
};

export default JobCard;
