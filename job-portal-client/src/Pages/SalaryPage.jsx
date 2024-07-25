import React, { useEffect, useState } from 'react';
import PageHeader from '../components/PageHeader';

const SalaryPage = () => {
    const [searchText, setSearch] = useState(""); // Manage search text
    const [salary, setSalary] = useState([]); // Manage salary data

    useEffect(() => {
        // Fetch salary data from local JSON file or API
        fetch("salary.json")
            .then(res => res.json())
            .then(data => setSalary(data))
            .catch(error => console.error('Error fetching salary data:', error));
    }, []);

    const handleSearch = () => {
        // Filter salary data based on search text
        const filtered = salary.filter(job =>
            job.title.toLowerCase().includes(searchText.toLowerCase())
        );
        setSalary(filtered);
    };

    return (
        <div className='max-w-screen-2xl container mx-auto xl:px-24 px-4'>
            <PageHeader title="Estimated Salary" path="salary" />

            

            {/* Display salary data */}
            <div className='grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-12 my-12 items-center'>
                {salary.length === 0 ? (
                    <p>No salary data available.</p>
                ) : (
                    salary.map((data) => (
                        <div key={data.id} className='shadow px-4 py-8'>
                            <h4 className='font-semibold text-xl'>{data.title}</h4>
                            <p className='my-2 font-medium text-blue text-lf'>{data.salary}</p>

                            <div className='flex flex-wrap gap-4'>
                                <a href="/" className='underline'>{data.status}</a>
                                <a href="/" className='underline'>{data.skills}</a>
                            </div>
                        </div> // Added closing div tag for the mapped element
                    ))
                )}
            </div>
        </div>
    );
};

export default SalaryPage;
