import React from 'react';
import Card from '../components/Card'; 

const Jobs = ({ result }) => {
  return (
    <div>
      {result.map((job, index) => (
        <Card key={index} data={job} />
      ))}
    </div>
  );
};

export default Jobs;



