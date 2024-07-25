import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import PageHeader from '../components/PageHeader';

const JobDetails = () => {
  const { id } = useParams();
  const [job, setJob] = useState({});

  useEffect(() => {
    fetch(`http://localhost:3000/all-jobs/${id}`)
      .then(res => res.json())
      .then(data => setJob(data))
      .catch(err => console.error('Error fetching job details:', err));
  }, [id]);

  const handleApply = async () => {
    const { value: url } = await Swal.fire({
      input: "url",
      inputLabel: "URL address",
      inputPlaceholder: "Enter the URL"
    });

    if (url) {
      Swal.fire(`Entered URL: ${url}`);
    }
  };

  return (
    <div className='max-w-screen-2xl container mx-auto xl:px-24 px-4'>
      <PageHeader title={"Single Job Page"} path={"single jobs"}/>
      <div className="bg-white shadow-md rounded p-6 mt-6">
        <h2 className="text-2xl font-bold mb-4">Job Details - </h2>
        <div className="space-y-2">
        <p><strong>Job Id:</strong> {id}</p>

          <p><strong>Company:</strong> {job.companyName}</p>
          <p><strong>Role:</strong> {job.jobTitle}</p>
          <p><strong>Location:</strong> {job.jobLocation}</p>
          <p><strong>Posting Date:</strong> {job.postingDate}</p>
          <p><strong>Description:</strong> {job.description}</p>
        </div>
        <button
          className='bg-blue-500 px-8 py-2 text-white mt-4 rounded'
          onClick={handleApply}
        >
          Apply Now !!
        </button>
      </div>
    </div>
  );
};

export default JobDetails;
