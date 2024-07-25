import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const MyJobs = () => {
    const email = "a@gmail.com";
    const [jobs, setJobs] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(true);
        fetch(`http://localhost:3000/myJobs/${email}`)
            .then(res => res.json())
            .then(data => {
                console.log("Fetched jobs:", data); // Log the fetched data
                setJobs(data);
                setIsLoading(false);
            })
            .catch(error => {
                console.error("Error fetching jobs:", error);
                setIsLoading(false);
            });
    }, [email]);

    const handleDelete = (id) => {
        console.log(`Delete job with ID: ${id}`);
        fetch(`http://localhost:3000/job/${id}`, {
            method: "DELETE",
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged === true) {
                    alert("Job Deleted Successfully!!");
                    // Update state to remove deleted job
                    setJobs(jobs.filter(job => job._id !== id));
                }
            })
            .catch(error => {
                console.error("Error deleting job:", error);
                alert("Failed to delete job. Please try again.");
            });
    };

    if (isLoading) {
        return <div>Loading...</div>;
    }

    return (
        <div className='max-w-screen-2xl container mx-auto xl:px-24 px-4'>
            <div className='my-jobs-container'>
                <h1 className='text-center p-20'><b><u>ALL MY JOBS</u></b></h1>
                <div className="flex justify-between mb-4">
                    <h2 className="text-2xl font-bold">All Jobs</h2>
                    <button className="bg-red-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded">
                        Post a New Job
                    </button>
                </div>

                <table className="min-w-full divide-y divide-gray-200">
                    <thead>
                        <tr>
                            <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                NO.
                            </th>
                            <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                TITLE
                            </th>
                            <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                COMPANY NAME
                            </th>
                            <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                SALARY
                            </th>
                            <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                EDIT
                            </th>
                            <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                DELETE
                            </th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {
                            jobs.map((job, index) => (
                                <tr key={index}>
                                    <th className="px-6 py-4 whitespace-nowrap">{index + 1}</th>
                                    <td className="px-6 py-4 whitespace-nowrap">{job.jobTitle}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">{job.companyName}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">{job.minPrice}-{job.maxPrice}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <button><Link to={`/edit-job/${job?._id}`}>Edit</Link></button>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <button onClick={() => handleDelete(job._id)} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyJobs;
